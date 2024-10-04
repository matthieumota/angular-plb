import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: BehaviorSubject<{ username: string } | null> = new BehaviorSubject<{ username: string } | null>(null);

  logged(): Observable<boolean> {
    return this.user.pipe(map(user => user !== null));
  }

  login(username: string): void {
    this.user.next({ username });
  }

  logout(): void {
    this.user.next(null);
  }
}
