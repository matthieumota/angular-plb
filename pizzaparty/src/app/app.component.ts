import { Component } from '@angular/core';
import { Pizza } from './models/pizza';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const PIZZAS: Pizza[] = [
  { id: 1, name: 'Reine', price: 12, image: '/assets/pizzas/reine.jpg' },
  { id: 2, name: '4 fromages', price: 13, image: '/assets/pizzas/4-fromages.jpg' },
  { id: 3, name: 'Orientale', price: 11, image: '/assets/pizzas/orientale.jpg' },
  { id: 4, name: 'Cannibale', price: 9, image: '/assets/pizzas/cannibale.jpg' }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'pizzaparty';
  selectedPizza!: Pizza; // Peut être undefined
  pizzas: Pizza[] = PIZZAS;

  onSelect(pizza: Pizza): void {
    this.selectedPizza = pizza; // Référence vers le même objet
    this.selectedPizza = { ...pizza }; // Ici, on peut faire une copie de l'objet (spread operator)
  }
}
