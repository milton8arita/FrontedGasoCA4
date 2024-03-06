export class Productos {
    _id?: string; 
    nombre: string; 
    descripcion: string;
    precio: number; 
  
    constructor(nombre: string, descripcion: string, precio: number) {
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.precio = precio;
    }
  }
  