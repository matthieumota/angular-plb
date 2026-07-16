import { Component, inject, OnInit, signal } from '@angular/core';
import { Pizz, Pizza } from './models/pizza';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { PizzaSelected } from "./components/pizza-selected/pizza-selected";
import { Counter } from "./components/counter/counter";
import { PizzaRepository } from './services/pizza-repository';
import { MessageService } from './services/message-service';
import { delay, map, repeat } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [FormsModule, NgClass, PizzaSelected, Counter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = 'pizzaparty';
  pizza = signal<Pizza | undefined>(undefined);
  pizzaRepository = inject(PizzaRepository);
  pizzas = signal<Pizza[]>([]);
  loading = signal(false);

  messageService = inject(MessageService);

  ngOnInit(): void {
    this.pizzaRepository.getPizzas().pipe(
      delay(500),
      // repeat(3),
    ).subscribe(p => this.pizzas.update(c => [...c, ...p]));
  }

  addMessage(): void {
    const types = ['success', 'error', 'info', 'warning'];
    const type = types[Math.floor(Math.random() * types.length)];

    this.messageService.addMessage({ text: 'test', type });
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
