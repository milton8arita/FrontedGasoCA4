import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Gasolinera } from 'src/app/models/gasolinera';
import { GasolineraService } from 'src/app/services/gasolinera.service';

@Component({
  selector: 'app-gasolinera',
  templateUrl: './gasolinera.component.html',
  styleUrls: ['./gasolinera.component.css']
})
export class GasolineraComponent implements OnInit{

  gasolineraForm: FormGroup;
  title = 'Gasolinera Afiliandose';
  id: string | null;


  constructor(private fb: FormBuilder, private router: Router, private _gasolineraService: GasolineraService, private aRouter: ActivatedRoute) {
    this.gasolineraForm = this.fb.group({
      nombre: ['', Validators.required],
      longitud: ['', Validators.required],
      latitud: ['', Validators.required],
      
   // calificaciones: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }


ngOnInit(): void {
    this.editGasolinera();
  }


addGasolinera() {

  const GASOLINERA: Gasolinera = {
    nombre: this.gasolineraForm.get('nombre')?.value,
    ubicacion: {
      longitud: this.gasolineraForm.get('longitud')?.value,
      latitud: this.gasolineraForm.get('latitud')?.value,
    },
     productos: this.gasolineraForm.get('productos')?.value,
    calificacion: this.gasolineraForm.get('calificacion')?.value
  }
  if (this.id !== null) {
    this._gasolineraService.editGasolinera(this.id, GASOLINERA).subscribe(data => {
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.gasolineraForm.reset();
    })
  } else {
    console.log(GASOLINERA);
    this._gasolineraService.saveGasolinera(GASOLINERA).subscribe(data => {
      this.router.navigate(['/'])
    }, error => {
      console.log(error);
      this.gasolineraForm.reset();
    })
  }}


editGasolinera() {

  if (this.id !== null) {
    this.title = 'Edit Gasolinera';
    this._gasolineraService.getGasolinera(this.id).subscribe(data => {
      this.gasolineraForm.setValue({
        nombre: data.nombre,
        
          latitud: data.ubicacion.latitud,
        longitud: data.ubicacion.longitud,
        
        
      })
    })
  }
}
}

