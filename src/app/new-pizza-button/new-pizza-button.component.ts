import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-pizza-button',
  standalone: true,
  imports: [],
  templateUrl: './new-pizza-button.component.html',
  styleUrl: './new-pizza-button.component.css'
})
export class NewPizzaButtonComponent {
  constructor(private router: Router) { }

  onClick() {
    this.router.navigate(['/new-pizza']);
  }
}
