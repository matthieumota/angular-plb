import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  @Input() value = 0;

  increment(): void {
    this.value++;
  }

  decrement(): void {
    this.value--;
  }
}
