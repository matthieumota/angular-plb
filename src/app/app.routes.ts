import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { PizzaList } from './pages/pizza-list/pizza-list';
import { PizzaDetail } from './pages/pizza-detail/pizza-detail';
import { PizzaForm } from './pages/pizza-form/pizza-form';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'pizzas', component: PizzaList },
  { path: 'pizzas/new', component: PizzaForm },
  { path: 'pizzas/:id/edit', component: PizzaForm },
  { path: 'pizzas/:id', component: PizzaDetail },
];
