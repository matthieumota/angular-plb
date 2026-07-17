import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Service()
export class Todo {
  http = inject(HttpClient);

  getTodosAsObservableWithDelay(): Observable<Array<Number>> {
    return of([1, 2, 3]).pipe(
      delay(1000)
    );
  }

  getTodos(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
