import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = ['a', 'b', 'c'];

  addMessage(message: string) {
    this.messages.push(message);
  }

  deleteMessage(message: string) {
    this.messages.splice(this.messages.indexOf(message), 1);
  }

  getMessages(): string[] {
    return this.messages;
  }
}
