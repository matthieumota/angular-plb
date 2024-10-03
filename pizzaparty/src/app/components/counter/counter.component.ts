import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  @Input() value: number = 0;

  decrement(): void {
    this.value -= 1;
  }

  increment(): void {
    this.value += 1;
  }
}
