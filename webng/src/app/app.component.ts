import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private apiUrl = 'http://localhost:8000/api/Products';
  data: any = {};

  constructor(private http: Http) {
    console.log('Welcome!');
    this.getProducts();
  }
  getData() {
    return this.http.get(this.apiUrl).map((res: Response) => res.json());
  }
  getProducts() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data.Products = data;
    });
  }

}
