// src/app/pizza-list/pizza-list.component.ts
import { Component, OnInit, OnDestroy, output, Output, EventEmitter } from '@angular/core';
import { PizzaService } from '../_services/pizza.service';
import { Pizza } from '../_models/pizza.model';
import { Subscription } from 'rxjs';
import { PizzaCardComponent } from "../pizza-card/pizza-card.component";

@Component({
  selector: 'app-pizza-list',
  standalone: true,
  imports: [PizzaCardComponent],
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit, OnDestroy {
  @Output() edit = new EventEmitter<Pizza>();

  pizzas: Pizza[] = [];
  private pizzasUpdateSub!: Subscription;

  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.fetchPizzas();
    this.pizzasUpdateSub = this.pizzaService.getPizzasUpdatedListener().subscribe(() => {
      this.fetchPizzas();
    });
  }

  fetchPizzas() {
    this.pizzaService.getPizzas().subscribe({
      next: response => this.pizzas = response,
      error: error => console.error(error)
    });
  }

  ngOnDestroy() {
    if (this.pizzasUpdateSub) {
      this.pizzasUpdateSub.unsubscribe();
    }
  }

  onEdit(p: Pizza) {
    this.edit.emit(p);
  }

  onDelete(p: Pizza) {
    if (p.id) {
      this.pizzaService.deletePizza(p.id).subscribe({
        next: () => this.fetchPizzas(),
        error: error => console.error(error)
      });
    }
  }
}