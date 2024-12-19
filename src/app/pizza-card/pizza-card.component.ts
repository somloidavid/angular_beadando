import { Component, Input } from '@angular/core';
import { Pizza } from '../_models/pizza.model';

@Component({
  selector: 'app-pizza-card',
  standalone: true,
  imports: [],
  templateUrl: './pizza-card.component.html',
  styleUrl: './pizza-card.component.css'
})
export class PizzaCardComponent {
  @Input() pizza!: Pizza;
}
