// src/app/app.component.ts
import { Component } from '@angular/core';
import { PizzaListComponent } from "./pizza-list/pizza-list.component";
import { NewPizzaButtonComponent } from "./new-pizza-button/new-pizza-button.component";
import { PizzaModalComponent } from "./pizza-modal/pizza-modal.component";
import { Pizza } from './_models/pizza.model';
import { PizzaService } from './_services/pizza.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PizzaListComponent,
    NewPizzaButtonComponent,
    PizzaModalComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_beadando';

  new: boolean = true;
  selectedPizza: Pizza = PizzaService.emptyPizza();
  showModal: boolean = false;
  
  constructor(private service: PizzaService) { }
  
  onNewPizzaClick() {
    this.selectedPizza = PizzaService.emptyPizza();
    this.new = true;
    this.showModal = true; 
  }
  
  cancel() {
    this.selectedPizza = PizzaService.emptyPizza(); 
    this.showModal = false; 
  }

  editPizza(p: Pizza) {
    this.selectedPizza = p;
    this.new = false;
    this.showModal = true; 
  }

  save(p: Pizza) {
    if (this.new) {
      this.service.addPizza(p).subscribe({
        next: () => {
          this.showModal = false;
        },
        error: (err) => {
          console.error(err);
        }
      });
    } else {
      this.service.updatePizza(p).subscribe({
        next: () => {
          this.selectedPizza = PizzaService.emptyPizza();
          this.showModal = false; 
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
  }
}