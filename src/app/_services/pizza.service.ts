import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from '../_models/pizza.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  url = 'http://localhost:3000/pizzas';

  constructor(private http: HttpClient) { }

  getPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(this.url);
  }

  addPizza(pizza: Pizza): Observable<Pizza> {
    return this.http.post<Pizza>(this.url, pizza);
  }

  updatePizza(pizza: Pizza): Observable<Pizza> {
    return this.http.patch<Pizza>(`${this.url}/${pizza.id}`, pizza);
  }

  deletePizza(id: number): Observable<Pizza> {
    return this.http.delete<Pizza>(`${this.url}/${id}`);
  }
}
