import { Component } from '@angular/core';
import { Categpry } from './category-interface.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  products: Categpry[] = [
    {
      image: './../../assets/1.jpg',
      price: 100,
    },
    {
      image: './../../assets/2.jpg',
      price: 200,
    },
    {
      image: './../../assets/3.jpg',
      price: 150,
    },
  ];
  productOne = this.products[0];
  productTwo = this.products[1];
  productThree = this.products[2];
}
