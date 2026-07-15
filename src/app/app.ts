import { Component } from '@angular/core';
import { Pizz, Pizza } from './models/pizza';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

const PIZZAS: Pizza[] = [
  { id: 1, name: 'Reine', price: 12, image: '/assets/pizzas/reine.jpg' },
  { id: 2, name: '4 fromages', price: 13, image: '/assets/pizzas/4-fromages.jpg' },
  { id: 3, name: 'Orientale', price: 11, image: '/assets/pizzas/orientale.jpg' },
  { id: 4, name: 'Cannibale', price: 9, image: '/assets/pizzas/cannibale.jpg' }
];

@Component({
  selector: 'app-root',
  imports: [FormsModule, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'pizzaparty';
  pizza?: Pizza;
  pizzas: Pizza[] = PIZZAS;

  onSelect(p: Pizza): void {
    console.log(p)

    this.pizza = p
  }
}
