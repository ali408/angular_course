import { Component } from '@angular/core';
import { Meal } from '../meal';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  constructor(private router: Router) {}
  goToProduct(id: string) {
    this.router.navigate(['/products', id]);
  }
  meals: Meal[] = [
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
      onSale: false,
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
    {
      publisher: 'Closet Cooking',
      title: 'Cauliflower Pizza Crust',
      recipe_id: '41470',
      image_url:
        'http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg',
      onSale: false,
      price: 47.99,
    },
    {
      publisher: 'Closet Cooking',
      title: 'Pizza Quesadillas (aka Pizzadillas)',
      recipe_id: '35478',
      image_url:
        'http://forkify-api.herokuapp.com/images/Pizza2BQuesadillas2B2528aka2BPizzadillas25292B5002B834037bf306b.jpg',
      onSale: true,
      price: 250.99,
    },
    {
      publisher: 'Two Peas and Their Pod',
      title: 'Sweet Potato Kale Pizza',
      recipe_id: '54454',
      image_url:
        'http://forkify-api.herokuapp.com/images/sweetpotatokalepizza2c6db.jpg',
      onSale: true,
      price: 400,
    },
    {
      publisher: 'My Baking Addiction',
      title: 'Pizza Dip',
      recipe_id: '2ec050',
      image_url:
        'http://forkify-api.herokuapp.com/images/PizzaDip21of14f05.jpg',
      onSale: true,
      price: 999,
    },
    {
      publisher: 'The Pioneer Woman',
      title: 'Pizza Potato Skins',
      recipe_id: '6fab1c',
      image_url: 'http://forkify-api.herokuapp.com/images/pizza3464.jpg',
      onSale: true,
      price: 14.99,
    },
    {
      publisher: 'Bon Appetit',
      title: 'No-Knead Pizza Dough',
      recipe_id: '49346',
      image_url:
        'http://forkify-api.herokuapp.com/images/nokneadpizzadoughlahey6461467.jpg',
      onSale: false,
      price: 299.99,
    },
    {
      publisher: 'Simply Recipes',
      title: 'Homemade Pizza',
      recipe_id: '36453',
      image_url:
        'http://forkify-api.herokuapp.com/images/pizza292x2007a259a79.jpg',
      onSale: true,
      price: 80.99,
    },
    {
      publisher: 'Closet Cooking',
      title: 'Taco Quesadilla Pizzas',
      recipe_id: '35626',
      image_url:
        'http://forkify-api.herokuapp.com/images/Taco2BQuesadilla2BPizza2B5002B4417a4755e35.jpg',
      onSale: true,
      price: 145.99,
    },
  ];
}
