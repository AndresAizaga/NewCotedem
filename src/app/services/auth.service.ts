import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  login(username: string, password: string): Observable<boolean> {
    // Hardcoded credentials check
    const isValid = username === 'jhernandez' && password === '12345';
    return of(isValid);
  }
}
