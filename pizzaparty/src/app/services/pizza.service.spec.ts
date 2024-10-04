import { TestBed, waitForAsync } from '@angular/core/testing';

import { PizzaService } from './pizza.service';
import { provideHttpClient } from '@angular/common/http';

describe('PizzaService', () => {
  let service: PizzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(PizzaService);
  });

  it('should be created', waitForAsync(() => {
    expect(service).toBeTruthy();
    service.getPizzas().subscribe(pizzas => {
      expect(pizzas.length).toBe(4)
    });
  }));
});
