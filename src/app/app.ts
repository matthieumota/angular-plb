import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from './services/message-service';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'pizzaparty';

  messageService = inject(MessageService);
}
