import { Component, OnInit } from '@angular/core';
import { Pizza } from './models/pizza';
import { CommonModule } from '@angular/common';
import { PizzaComponent } from './components/pizza/pizza.component';
import { CounterComponent } from './components/counter/counter.component';
import { PizzaService } from './services/pizza.service';
import { Ingredient } from './models/ingredient';
import { IngredientListComponent } from './components/ingredient-list/ingredient-list.component';
import { BehaviorSubject, debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PizzaComponent, CounterComponent, IngredientListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title: string = 'pizzaparty';
  selectedPizza!: Pizza | null; // Peut être null
  pizzas: Pizza[] = [];
  ingredients: Ingredient[] = [];
  terms = new BehaviorSubject<string>(''); // Observable et observer
  pizzas$!: Observable<Pizza[]>;

  constructor(private pizzaService: PizzaService) {}

  // On initialise les données du composant après son initialisation
  ngOnInit(): void {
    this.pizzaService.getPizzas().subscribe(pizzas => this.pizzas = pizzas);
    this.pizzaService.getIngredients().then(ingredients => this.ingredients = ingredients);

    this.pizzas$ = this.terms.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((term: string) => this.pizzaService.searchPizzas(term))
    );
  }

  onSelect(pizza: Pizza): void {
    this.selectedPizza = pizza; // Référence vers le même objet
    // this.selectedPizza = { ...pizza }; // Ici, on peut faire une copie de l'objet (spread operator)
  }

  unSelect(pizza: Pizza | null): void {
    console.log("Evenement de l'enfant ", pizza);
    this.selectedPizza = null;
  }

  addIngredient(event: Ingredient) {
    if (this.selectedPizza) {
      this.selectedPizza.ingredient = event
    }
  }
}
