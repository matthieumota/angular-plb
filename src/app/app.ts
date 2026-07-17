import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from './services/message-service';
import { RouterOutlet } from '@angular/router';
import { NavLink } from "./components/nav-link/nav-link";

@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterOutlet, NavLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'pizzaparty';

  messageService = inject(MessageService);
}
