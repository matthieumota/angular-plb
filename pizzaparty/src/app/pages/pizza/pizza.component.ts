import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router, RouterLink } from '@angular/router';
import { catchError, delay, of, switchMap, throwError } from 'rxjs';
import { PizzaService } from '../../services/pizza.service';
import { Pizza } from '../../models/pizza';

@Component({
  selector: 'app-pizza',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.scss'
})
export class PizzaComponent implements OnInit {
  pizza!: Pizza;

  constructor(
    private route: ActivatedRoute,
    private pizzaService: PizzaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.route.paramMap.pipe((params: ParamMap) => params.get('id'))
    console.log('INITIALISATION', this.route.snapshot.paramMap.get('id'))
    this.route.params.pipe(
      switchMap((params: Params) => this.pizzaService.getPizza(params['id'])),
      catchError(() => {
        this.router.navigateByUrl('/')
        return of()
      }),
      delay(500)
    ).subscribe((pizza) => this.pizza = pizza)
  }

  next() {
    return +this.pizza.id + 1
  }
}
