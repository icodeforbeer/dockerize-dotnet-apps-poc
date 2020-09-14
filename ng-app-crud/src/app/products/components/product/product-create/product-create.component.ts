import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product();
  submitted = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }


  createProduct(): void {
    this.productService
      .create(this.product)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        }
      );
  }
  newProduct(): void {
    this.product = new Product();
    this.submitted = false;
  }
}
