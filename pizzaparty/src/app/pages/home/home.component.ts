import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PizzaComponent } from '../../components/pizza/pizza.component';
import { IngredientListComponent } from '../../components/ingredient-list/ingredient-list.component';
import { Pizza } from '../../models/pizza';
import { Ingredient } from '../../models/ingredient';
import { BehaviorSubject, debounceTime, distinctUntilChanged, Observable, switchMap } from 'rxjs';
import { PizzaService } from '../../services/pizza.service';
import { MessageService } from '../../services/message.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PizzaComponent, IngredientListComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  selectedPizza!: Pizza | null; // Peut être null
  pizzas: Pizza[] = [];
  ingredients: Ingredient[] = [];
  terms = new BehaviorSubject<string>(''); // Observable et observer
  pizzas$!: Observable<Pizza[]>;

  constructor(
    private pizzaService: PizzaService,
    private messageService: MessageService
  ) {}

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

    this.messageService.addMessage(`Vous avez choisi ${pizza.name}`);
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
