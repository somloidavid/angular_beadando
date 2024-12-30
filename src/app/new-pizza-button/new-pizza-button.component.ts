import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-pizza-button',
  standalone: true,
  imports: [],
  templateUrl: './new-pizza-button.component.html',
  styleUrl: './new-pizza-button.component.css'
})
export class NewPizzaButtonComponent {
  @Output() newPizza: EventEmitter<void> = new EventEmitter<void>();

  onClick() {
    this.newPizza.emit();
  }
}
