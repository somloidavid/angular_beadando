import { Component } from '@angular/core';
import { PizzaListComponent } from "./pizza-list/pizza-list.component";
import { NewPizzaButtonComponent } from "./new-pizza-button/new-pizza-button.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PizzaListComponent, NewPizzaButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_beadando';
}
