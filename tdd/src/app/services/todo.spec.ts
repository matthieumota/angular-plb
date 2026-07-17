import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';

import { Todo } from './todo';

describe('Todo', () => {
  let service: Todo;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(Todo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a method as observable fake', async () => {
    vi.useFakeTimers();
    let todos!: Array<Number>;
    service.getTodosAsObservableWithDelay().subscribe(t => todos = t);
    await vi.runAllTimersAsync();
    expect(todos).toEqual([1, 2, 3]);
    vi.useRealTimers();
  });

  it('should have a method as observable real', async () => {
    const todos = await firstValueFrom(service.getTodosAsObservableWithDelay());
    expect(todos).toEqual([1, 2, 3]);
  });

  it('should return todos from real API', async () => {
    const todos = await firstValueFrom(service.getTodos());
    expect(todos.length).toBe(200);
  });
});
