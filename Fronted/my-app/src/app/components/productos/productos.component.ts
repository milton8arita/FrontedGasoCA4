import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { Productos } from 'src/app/models/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{
  productosForm: FormGroup;
  title = 'Agregando Productos';
  id: string | null;


  constructor(private fb: FormBuilder, private router: Router, private _productoService: ProductoService, private aRouter: ActivatedRoute) {
    this.productosForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }


ngOnInit(): void {
    this.editProductos();
  }


addProductos() {

  const PRODUCTOS: Productos = {
    nombre: this.productosForm.get('nombre')?.value,
    descripcion: this.productosForm.get('descripcion')?.value,    
    precio: this.productosForm.get('precio')?.value,
      
  }
  if (this.id !== null) {
    this._productoService.editProducto(this.id, PRODUCTOS).subscribe(data => {
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.productosForm.reset();
    })
  } else {
    console.log(PRODUCTOS);
    this._productoService.saveProducto(PRODUCTOS).subscribe(data => {
      this.router.navigate(['/'])
    }, error => {
      console.log(error);
      this.productosForm.reset();
    })
  }}


editProductos() {

  if (this.id !== null) {
    this.title = 'Edit Productos';
    this._productoService.getProducto(this.id).subscribe(data => {
      this.productosForm.setValue({
        nombre: data.nombre,
        descripcion: data.descripcion,
        precio: data.precio
        
      })
    })
  }
}
}