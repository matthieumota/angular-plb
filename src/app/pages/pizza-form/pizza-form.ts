import { CommonModule, JsonPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, map } from 'rxjs/operators';
import { PizzaRepository } from '../../services/pizza-repository';
import { FormsModule, NgForm } from '@angular/forms';
import { PizzaDraft } from '../../models/pizza';

@Component({
  selector: 'app-pizza-form',
  imports: [CommonModule, FormsModule, JsonPipe, LowerCasePipe, UpperCasePipe],
  templateUrl: './pizza-form.html',
  styleUrl: './pizza-form.css',
})
export class PizzaForm {
  activatedRoute = inject(ActivatedRoute);
  pizzaRepository = inject(PizzaRepository);
  router = inject(Router);

  id = signal<string | undefined>(undefined);
  // id = toSignal<string | undefined>(this.activatedRoute.params.pipe(map(params => params['id'])));
  isEdit = computed(() => this.id() !== undefined);
  title = computed(() => this.isEdit() ? 'Modifier une pizza' : 'Créer une pizza');

  test = {a: 1, b: 2}
  amount = 1458
  $pizzas = this.pizzaRepository.getPizzas().pipe(
    delay(500)
  )

  constructor() {
    this.activatedRoute.params.subscribe(params => {
      this.id.set(params['id']);
    });
  }

  pizzaDraft: PizzaDraft = {
    name: '',
    price: undefined,
    image: '/assets/pizzas/reine.jpg',
  }

  save(form: NgForm) {
    console.log(form.value)
    console.log(this.pizzaDraft)
    this.pizzaRepository.createPizza(this.pizzaDraft).subscribe(
      pizza => this.router.navigate(['/pizzas', pizza.id])
    )
  }
}
