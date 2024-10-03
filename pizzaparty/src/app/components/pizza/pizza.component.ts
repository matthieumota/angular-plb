import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Pizza } from '../../models/pizza';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PizzaService } from '../../services/pizza.service';

export type Nullable<T> = T | null;

@Component({
  selector: 'app-pizza',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.scss'
})
export class PizzaComponent {
  @Input() pizza!: Nullable<Pizza>;
  @Output() closed = new EventEmitter<Pizza | null>();
  pizzaService = inject(PizzaService); // Remplace le constructor pour l'injection de deps

  closePizza(): void {
    this.closed.emit(this.pizza);
  }

  update(): void {
    if (this.pizza) {
      this.pizzaService.updatePizza(this.pizza).subscribe();
    }
  }
}
