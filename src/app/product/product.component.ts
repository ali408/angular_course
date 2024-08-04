import { Component } from '@angular/core';
import { Meal } from '../meal';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  suggestProducts: Meal[] = [
    {
      publisher: '101 Cookbooks',
      title: 'Best Pizza Dough Ever',
      recipe_id: '47746',
      image_url:
        'http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg',
      onSale: true,
      price: 100,
    },
    {
      publisher: 'The Pioneer Woman',
      title: 'Deep Dish Fruit Pizza',
      recipe_id: '46956',
      image_url: 'http://forkify-api.herokuapp.com/images/fruitpizza9a19.jpg',
      onSale: true,
      price: 147,
    },
    {
      publisher: 'Closet Cooking',
      title: 'Pizza Dip',
      recipe_id: '35477',
      image_url:
        'http://forkify-api.herokuapp.com/images/Pizza2BDip2B12B500c4c0a26c.jpg',
      onSale: true,
      price: 685.99,
    },
  ];
}
