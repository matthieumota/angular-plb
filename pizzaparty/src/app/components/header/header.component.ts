import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { CommonModule } from '@angular/common';
import { delay, Observable, scan } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  messages!: string[];
  messages$!: Observable<string[]>;

  constructor(public messageService: MessageService) {}

  ngOnInit(): void {
    this.messages = this.messageService.getMessages();
    this.messages$ = this.messageService.getMessages$().pipe(
      delay(1000),
      scan((messages: string[], message: string) => [...messages, message], [])
    );
  }

  delete(message: string) {
    this.messageService.deleteMessage(message);
  }
}
