import { Component, signal } from '@angular/core';
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly title = signal('Angular');
}
