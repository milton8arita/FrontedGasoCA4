import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.css']
})
export class ListProductosComponent implements OnInit {
  listProductos: Productos[] = [];

  constructor(private _productoService: ProductoService) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    this._productoService.getProductos().subscribe(data => {
      console.log(data);
      this.listProductos = data;
    }, error => {
      console.log(error);
    })
  }

  deleteProductos(id: any){
    this._productoService.deleteProducto(id).subscribe(data => {
      this.getProductos();
    }, error => {
      console.log(error)
    })
  }

}



