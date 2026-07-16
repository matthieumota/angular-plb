import { Component, signal } from '@angular/core';
import { Pizz, Pizza } from './models/pizza';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { PizzaSelected } from "./components/pizza-selected/pizza-selected";
import { Counter } from "./components/counter/counter";

const PIZZAS: Pizza[] = [
  { id: 1, name: 'Reine', price: 12, image: '/assets/pizzas/reine.jpg' },
  { id: 2, name: '4 fromages', price: 13, image: '/assets/pizzas/4-fromages.jpg' },
  { id: 3, name: 'Orientale', price: 11, image: '/assets/pizzas/orientale.jpg' },
  { id: 4, name: 'Cannibale', price: 9, image: '/assets/pizzas/cannibale.jpg' }
];

@Component({
  selector: 'app-root',
  imports: [FormsModule, NgClass, PizzaSelected, Counter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'pizzaparty';
  pizza = signal<Pizza | undefined>(undefined);
  pizzas: Pizza[] = PIZZAS;

  onSelect(p: Pizza): void {
    console.log(p)

    this.pizza.set(p)

    setTimeout(() => this.pizza.set(undefined), 5000);
  }

  demoPlain = 'valeur initiale';
  demoSignal = signal<string>('valeur initiale du signal');

  launchDemoPlain(): void {
    setTimeout(() => {
      this.demoPlain = 'changé (setTimeout)';
    }, 1500);
  }

  launchDemoSignal(): void {
    setTimeout(() => {
      this.demoSignal.set('changé (setTimeout) du signal');
    }, 1500);
  }
}
