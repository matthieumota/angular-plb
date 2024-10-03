import { Component, Input } from '@angular/core';
import { Ingredient } from '../../models/ingredient';

@Component({
  selector: 'app-ingredient-list',
  standalone: true,
  templateUrl: './ingredient-list.component.html',
  styleUrl: './ingredient-list.component.scss'
})
export class IngredientListComponent {
  @Input() ingredients: Ingredient[] = [];
}
