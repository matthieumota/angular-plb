import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { PizzaList } from './pages/pizza-list/pizza-list';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'pizzas', component: PizzaList }
];
