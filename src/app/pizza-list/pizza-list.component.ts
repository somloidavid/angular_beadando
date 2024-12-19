import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../_services/pizza.service';
import { Pizza } from '../_models/pizza.model';
import { Toppings } from '../_models/toppings.enum';
import { PizzaCardComponent } from "../pizza-card/pizza-card.component";

@Component({
  selector: 'app-pizza-list',
  standalone: true,
  imports: [PizzaCardComponent],
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  pizzas: Pizza[] = []

  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.pizzaService.getPizzas().subscribe(
      {
        next: response => this.pizzas = response,
        error: error => console.error(error)
      }
    );
  }
}
