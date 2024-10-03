import { Component, OnInit } from '@angular/core';
import { Pizza } from './models/pizza';
import { CommonModule } from '@angular/common';
import { PizzaComponent } from './components/pizza/pizza.component';
import { CounterComponent } from './components/counter/counter.component';
import { PizzaService } from './services/pizza.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PizzaComponent, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title: string = 'pizzaparty';
  selectedPizza!: Pizza | null; // Peut être null
  pizzas: Pizza[] = [];

  constructor(private pizzaService: PizzaService) {}

  // On initialise les données du composant après son initialisation
  ngOnInit(): void {
    this.pizzaService.getPizzas().then(pizzas => this.pizzas = pizzas);
  }

  onSelect(pizza: Pizza): void {
    this.selectedPizza = pizza; // Référence vers le même objet
    this.selectedPizza = { ...pizza }; // Ici, on peut faire une copie de l'objet (spread operator)
  }

  unSelect(pizza: Pizza | null): void {
    console.log("Evenement de l'enfant ", pizza);
    this.selectedPizza = null;
  }
}
