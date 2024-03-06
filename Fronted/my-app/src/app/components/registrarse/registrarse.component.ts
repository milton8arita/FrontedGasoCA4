import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
  usuarioForm: FormGroup;
  title = 'Creando nuevo Usuario';
  id: string | null;


  constructor(private fb: FormBuilder, private router: Router, private _usuarioService: UsuarioService, private aRouter: ActivatedRoute) {
    this.usuarioForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      roles: ['', Validators.required],
    //  calificaciones: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }


ngOnInit(): void {
    this.editUsuario();
  }


addUsuario() {

  const USUARIO: Usuario = {
    username: this.usuarioForm.get('username')?.value,
    email: this.usuarioForm.get('email')?.value,
    password: this.usuarioForm.get('password')?.value,
    roles: this.usuarioForm.get('roles')?.value,
    //calificaciones: this.usuarioForm.get('calificaciones')?.value
  }
  if (this.id !== null) {
    this._usuarioService.editUsuario(this.id, USUARIO).subscribe(data => {
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.usuarioForm.reset();
    })
  } else {
    console.log(USUARIO);
    this._usuarioService.saveUsuario(USUARIO).subscribe(data => {
      this.router.navigate(['/'])
    }, error => {
      console.log(error);
      this.usuarioForm.reset();
    })
  }}


editUsuario() {

  if (this.id !== null) {
    this.title = 'Edit Usuario';
    this._usuarioService.getUsuario(this.id).subscribe(data => {
      this.usuarioForm.setValue({
        username: data.username,
        email: data.email,
        password: data.password,
        roles: data.roles
       // calificaciones.data.calificaciones
      })
    })
  }
}
}