import { HttpClient } from '@angular/common/http';  //genera la conexion entre fronted y backend Httpsclient
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gasolinera } from '../models/gasolinera';

@Injectable({
  providedIn: 'root'
})
export class GasolineraService {
  getGasolint(id: string) {
    throw new Error('Method not implemented.');
  }

  url = 'http://localhost:5001/api/gasolineras/';

  constructor(private http:HttpClient) { }


  //funciones o metodos
  getGasolineras(): Observable<any> {
    return this.http.get(this.url);  //retorna lo de la url
  }

  deleteGasolinera(id:string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  saveGasolinera(gasolinera:Gasolinera): Observable<any> {
    return this.http.post(this.url, gasolinera);
  }

  getGasolinera(id:string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editGasolinera(id:string, gasolinera:Gasolinera): Observable<any> {
    return this.http.put(this.url + id, gasolinera);
  }
}
