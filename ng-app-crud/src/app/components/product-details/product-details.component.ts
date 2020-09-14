import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  currentProduct: Product = null;
  currentNotifier: MatSnackBarRef<TextOnlySnackBar>;
  message = '';

  productFormGroup: FormGroup;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.message = '';
    this.getProduct(Number(this.route.snapshot.paramMap.get('id')));
    this.setupProductForm(this.currentProduct);
  }

  setupProductForm(product: Product): void {
    this.productFormGroup = this.fb.group({
      id: [product?.id],
      productName: [null, Validators.required],
      productDescription: [
        null,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(200),
        ],
      ],
      productPrice: [null, Validators.required],
      available: [null, Validators.required],
      updatedDate: [null],
    });
  }

  getProduct(id: number): void {
    this.productService.read(id).subscribe(
      (product: Product) => {
        this.currentProduct = product;
        this.productFormGroup.setValue(this.currentProduct);
        console.log(product);
      },
      (error: Error) => {
        console.log(error);
      }
    );
  }

  updateProduct(): void {
    this.currentProduct = {
      ...this.currentProduct,
      ...this.productFormGroup.value,
    };
    this.productService
      .update(this.currentProduct.id, this.currentProduct)
      .subscribe(
        (response: Product) => {
          this.showSuccess();
        },
        (error: Error) => {
          console.log(error);
        }
      );
  }

  backToList(): void {
    this.router.navigate(['/products']);
  }

  showSuccess(): void {
    this.currentNotifier = this.snackBar.open('Product is updated!!', 'Close', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
