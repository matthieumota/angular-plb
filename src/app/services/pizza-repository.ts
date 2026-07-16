import { inject, Service } from '@angular/core';
import { Pizza } from '../models/pizza';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Service()
export class PizzaRepository {
  http = inject(HttpClient);

  getPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(`${environment.API_URL}/pizzas`);
  }
}
