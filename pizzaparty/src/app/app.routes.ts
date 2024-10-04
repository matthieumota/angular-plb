import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { HomeComponent } from './pages/home/home.component';
import { PizzaComponent } from './pages/pizza/pizza.component';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './pages/register/register.component';

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
    component: PizzaComponent,
    canActivate: [() => inject(AuthService).logged()]
  },
  {
    path: 'inscription',
    component: RegisterComponent
  },
];
