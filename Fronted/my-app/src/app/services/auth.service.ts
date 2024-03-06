import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://tu-servidor.com/api/auth'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post<any>(`${this.apiUrl}/login`, loginData)
      .pipe(
        catchError(error => {
          console.error('Error al iniciar sesión:', error);
          return throwError(error);
        })
      );
  }
}
