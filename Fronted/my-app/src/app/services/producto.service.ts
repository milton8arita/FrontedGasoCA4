import { HttpClient } from '@angular/common/http';  //genera la conexion entre fronted y backend Httpsclient
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productos } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  getProducts(id: string) {
    throw new Error('Method not implemented.');
  }

  url = 'http://localhost:5001/api/productos/';

  constructor(private http:HttpClient) { }


  //funciones o metodos
  getProductos(): Observable<any> {
    return this.http.get(this.url);  //retorna lo de la url
  }

  deleteProducto(id:string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  saveProducto(productos:Productos): Observable<any> {
    return this.http.post(this.url, productos);
  }

  getProducto(id:string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editProducto(id:string, productos:Productos): Observable<any> {
    return this.http.put(this.url + id, productos);
  }
}
