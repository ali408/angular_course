import { Component, Input } from '@angular/core';
import { Meal } from '../meal';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() meal: Meal = {} as Meal;
}
