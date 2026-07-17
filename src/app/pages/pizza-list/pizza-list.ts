import { Component, inject, OnInit, signal } from '@angular/core';
import { PizzaSelected } from "../../components/pizza-selected/pizza-selected";
import { Pizza } from '../../models/pizza';
import { PizzaRepository } from '../../services/pizza-repository';
import { delay } from 'rxjs';
import { NgClass } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-pizza-list',
  imports: [PizzaSelected, NgClass, RouterLink],
  templateUrl: './pizza-list.html',
  styleUrl: './pizza-list.css',
})
export class PizzaList implements OnInit {
  pizza = signal<Pizza | undefined>(undefined);
  pizzaRepository = inject(PizzaRepository);
  pizzas = signal<Pizza[]>([]);
  loading = signal(false);

  ngOnInit(): void {
    this.pizzaRepository.getPizzas().pipe(
      delay(100),
      // repeat(3),
    ).subscribe(p => this.pizzas.update(c => [...c, ...p]));
  }

  onSelect(p: Pizza): void {
    if (this.loading()) {
      return;
    }

    this.pizza.set(undefined);
    this.loading.set(true);

    this.pizzaRepository.getPizza(p.id).pipe(
      delay(500),
    ).subscribe(pizza => {
      this.pizza.set(pizza);
      this.loading.set(false);
    });
  }
}
