import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: string[] = [];
  private messages$: Subject<string> = new Subject();

  addMessage(message: string) {
    this.messages.push(message);
    this.messages$.next(message);
  }

  deleteMessage(message: string) {
    this.messages.splice(this.messages.indexOf(message), 1);
  }

  getMessages(): string[] {
    return this.messages;
  }

  getMessages$(): Subject<string> {
    return this.messages$;
  }
}
