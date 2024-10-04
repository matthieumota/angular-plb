import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza';
import { Ingredient } from '../models/ingredient';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';

const INGREDIENTS: Ingredient[] = [
  { id: 1, name: 'Avocat', image: '/assets/ingredients/avocat.png', weight: 1, price: 1 },
  { id: 2, name: 'Tomate', image: '/assets/ingredients/tomate.png', weight: 1, price: 2 },
];

const BASE_URL = 'http://localhost:3000'

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  constructor(private http: HttpClient) {}

  getPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(`${BASE_URL}/pizzas`).pipe(
      delay(500),
    );
  }

  getPizza(id: number): Observable<Pizza> {
    return this.http.get<Pizza>(`${BASE_URL}/pizzas/${id}`);
  }

  updatePizza(pizza: Pizza): Observable<Pizza> {
    return this.http.put<Pizza>(`${BASE_URL}/pizzas/${pizza.id}`, pizza);
  }

  searchPizzas(value: string): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(`${BASE_URL}/pizzas?q=${value}`);
  }

  getIngredients(): Promise<Ingredient[]> {
    return Promise.resolve(INGREDIENTS);
  }
}
