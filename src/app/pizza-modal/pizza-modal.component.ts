// src/app/pizza-modal/pizza-modal.component.ts
import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pizza } from '../_models/pizza.model';
import { CommonModule, NgFor } from '@angular/common';
import { getToppings, Toppings } from '../_models/toppings.enum';

declare var bootstrap: any;

@Component({
  selector: 'app-pizza-modal',
  standalone: true,
  templateUrl: './pizza-modal.component.html',
  styleUrls: ['./pizza-modal.component.css'],
  imports: [CommonModule, NgFor]
})
export class PizzaModalComponent implements OnInit {
  @Input() pizza!: Pizza;
  @Output() saved: EventEmitter<Pizza> = new EventEmitter<Pizza>();
  @Output() cancelled: EventEmitter<void> = new EventEmitter<void>();

  private modalInstance!: any;

  toppings: Toppings[] = getToppings();

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    const modalElement = this.elementRef.nativeElement.querySelector('#pizzaModal');
    this.modalInstance = new bootstrap.Modal(modalElement, {
      backdrop: 'static',
      keyboard: false
    });
    this.modalInstance.show();
  }

  save() {
    this.saved.emit(this.pizza);
    this.modalInstance.hide();
  }

  cancel() {
    this.cancelled.emit();
    this.modalInstance.hide();
  }

  getValue(event: any): string {
    return event.target.value;
  }

  onToppingChange(event: any, topping: string) {
    if (event.target.checked) {
      this.pizza.toppings.push(topping as Toppings);
    } else {
      const index = this.pizza.toppings.indexOf(topping as Toppings);
      if (index > -1) {
        this.pizza.toppings.splice(index, 1);
      }
    }
  }
}