import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { HomeComponent } from './pages/home/home.component';
import { PizzaComponent } from './pages/pizza/pizza.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'counter-exercice',
    component: CounterComponent
  },
  {
    path: 'pizza/:id',
    component: PizzaComponent
  }
];
