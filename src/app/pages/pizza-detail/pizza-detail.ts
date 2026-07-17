import { Component, inject, signal } from '@angular/core';
import { Pizza } from '../../models/pizza';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PizzaRepository } from '../../services/pizza-repository';
import { delay, switchMap } from 'rxjs';

@Component({
  selector: 'app-pizza-detail',
  imports: [RouterLink],
  templateUrl: './pizza-detail.html',
  styleUrl: './pizza-detail.css',
})
export class PizzaDetail {
  pizza = signal<Pizza | undefined>(undefined)
  hasError = signal(false)
  activatedRoute = inject(ActivatedRoute)
  pizzaRepository = inject(PizzaRepository)

  constructor() {
    this.activatedRoute.params.pipe(
      switchMap(params => this.pizzaRepository.getPizza(params['id'])),
    ).subscribe({
      next: (pizza) => {
        this.pizza.set(pizza)
      },
      error: () => this.hasError.set(true)
    })

    // Moins "optimise" observable
    // this.activatedRoute.params.subscribe(params => {
    //   this.pizzaRepository.getPizza(params['id']).subscribe(pizza => {
    //     console.log(pizza)
    //   })
    // })
  }
}
