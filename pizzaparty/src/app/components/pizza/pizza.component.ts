import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pizza } from '../../models/pizza';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  closePizza(): void {
    this.closed.emit(this.pizza);
  }
}
