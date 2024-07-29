import { Component } from '@angular/core';
import { Product } from './product-interface.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  products: Product[] = [
    {
      image: './../../assets/1.jpg',
      name: 'Iphone 16 pro max',
      price: 100,
      onSale: true,
    },
    {
      image: './../../assets/2.jpg',
      name: 'Samsung LG 65 Full HD',
      price: 200,
      onSale: false,
    },
    {
      image: './../../assets/3.jpg',
      name: 'Toshiba Air Condition',
      price: 150,
      onSale: true,
    },
  ];

  productOne = this.products[0];
  productTwo = this.products[1];
  productThree = this.products[2];
}
