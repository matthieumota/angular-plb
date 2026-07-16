import { Component, input, Input, linkedSignal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  // @Input() value = 0;
  initialValue = input(0);
  value = linkedSignal(() => this.initialValue())

  increment(): void {
    this.value.set(this.value() + 1);
  }

  decrement(): void {
    this.value.set(this.value() - 1);
  }
}
