export class Gasolinera {
    _id?: string;
    nombre: string;
    productos: string;
    calificacion: string;
    ubicacion: {
      latitud: number;
      longitud: number;
    };
  //  productos: string;
  
    constructor(nombre: string, ubicacion: { latitud: number; longitud: number }, productos: string, calificacion: string) {
      this.nombre = nombre;
      this.ubicacion = ubicacion;
     this.productos = productos;
     this.calificacion = calificacion
    }
  }
  