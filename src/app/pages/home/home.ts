import { Component, inject } from '@angular/core';
import { Counter } from "../../components/counter/counter";
import { MessageService } from '../../services/message-service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [Counter, NgClass],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  messageService = inject(MessageService);

  addMessage(): void {
    const types = ['success', 'error', 'info', 'warning'];
    const type = types[Math.floor(Math.random() * types.length)];

    this.messageService.addMessage({ text: 'test', type });
  }
}
