import { Component, Input } from '@angular/core';
import { Pizza } from '../../models/pizza';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pizza',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.scss'
})
export class PizzaComponent {
  @Input() pizza!: Pizza;
}
