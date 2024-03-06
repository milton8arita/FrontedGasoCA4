import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) { // Inyecta HttpClient
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

      const loginData = { // Crea un objeto con los datos de inicio de sesión
        email: email,
        password: password
      };

      // Envía la solicitud POST al servidor para autenticar al usuario
      this.http.post<any>('http://tu-servidor.com/api/auth', loginData).subscribe(
        response => {
          // Maneja la respuesta del servidor
          if (response && response.token) {
            // Si la autenticación es exitosa, guarda el token de sesión (por ejemplo, en el almacenamiento local)
            localStorage.setItem('token', response.token);
            this.router.navigate(['/inicio']);
             } else {
            // Maneja el caso en que la autenticación falla (por ejemplo, muestra un mensaje de error)
            console.error('Error de autenticación:', response.error);
          }
        },
        error => {
          // Maneja errores de la solicitud HTTP (por ejemplo, muestra un mensaje de error)
          console.error('Error al iniciar sesión:', error);
        }
      );
    }
  }
}
