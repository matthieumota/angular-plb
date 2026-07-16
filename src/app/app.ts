import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Counter } from "./components/counter/counter";
import { MessageService } from './services/message-service';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule, NgClass, Counter, RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'pizzaparty';

  messageService = inject(MessageService);

  addMessage(): void {
    const types = ['success', 'error', 'info', 'warning'];
    const type = types[Math.floor(Math.random() * types.length)];

    this.messageService.addMessage({ text: 'test', type });
  }
}
