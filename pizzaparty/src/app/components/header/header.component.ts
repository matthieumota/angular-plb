import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  messages$!: string[];

  constructor(public messageService: MessageService) {}

  ngOnInit(): void {
    this.messages$ = this.messageService.getMessages();
  }

  delete(message: string) {
    this.messageService.deleteMessage(message);
  }
}
