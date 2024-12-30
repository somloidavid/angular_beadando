import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from '../_models/pizza.model';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  url = 'http://localhost:3000/pizzas';

  private pizzasUpdated = new Subject<void>();

  constructor(private http: HttpClient) { }

  getPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(this.url);
  }

  addPizza(pizza: Pizza): Observable<Pizza> {
    return this.http.post<Pizza>(this.url, pizza).pipe(
      tap(() => this.pizzasUpdated.next())
    );
  }

  updatePizza(pizza: Pizza): Observable<Pizza> {
    return this.http.patch<Pizza>(`${this.url}/${pizza.id}`, pizza).pipe(
      tap(() => this.pizzasUpdated.next())
    );
  }

  deletePizza(id: number): Observable<Pizza> {
    return this.http.delete<Pizza>(`${this.url}/${id}`);
  }

  getPizzasUpdatedListener(): Observable<void> {
    return this.pizzasUpdated.asObservable();
  }

  static emptyPizza(): Pizza {
    return {
      name: '',
      price: '',
      toppings: [],
      image: ''
    };
  }
}
