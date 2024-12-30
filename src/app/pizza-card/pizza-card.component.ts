import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pizza } from '../_models/pizza.model';

@Component({
  selector: 'app-pizza-card',
  standalone: true,
  imports: [],
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.css']
})
export class PizzaCardComponent {
  @Input() pizza!: Pizza;
  @Output() edit = new EventEmitter<Pizza>();
  @Output() delete = new EventEmitter<Pizza>();

  onEdit() {
    this.edit.emit(this.pizza);
  }

  onDelete() {
    this.delete.emit(this.pizza);
  }
}