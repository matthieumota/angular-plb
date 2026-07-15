import { Component } from '@angular/core';
import { Pizz, Pizza } from './models/pizza';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'pizzaparty';
  pizza0: Pizz = {
    id: 1,
    name: '4 fromages',
    price: 12,
    image: '/assets/pizzas/reine.jpg',
  }
  pizza: Pizza = new Pizza(1, 'Reine', 12, '/assets/pizzas/reine.jpg');
}
