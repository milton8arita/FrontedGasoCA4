import { HttpClient } from '@angular/common/http';  //genera la conexion entre fronted y backend Httpsclient
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  getUsuari(id: string) {
    throw new Error('Method not implemented.');
  }

  url = 'http://localhost:5001/api/usuarios/';

  constructor(private http:HttpClient) { }


  //funciones o metodos
  getUsuarios(): Observable<any> {
    return this.http.get(this.url);  //retorna lo de la url
  }

  deleteUsuario(id:string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  saveUsuario(usuario:Usuario): Observable<any> {
    return this.http.post(this.url, usuario);
  }

  getUsuario(id:string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editUsuario(id:string, usuario:Usuario): Observable<any> {
    return this.http.put(this.url + id, usuario);
  }
}
