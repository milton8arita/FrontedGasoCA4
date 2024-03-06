import { Component, OnInit } from '@angular/core';
import { Gasolinera } from 'src/app/models/gasolinera';
import { GasolineraService } from 'src/app/services/gasolinera.service';
@Component({
  selector: 'app-list-gasolineras',
  templateUrl: './list-gasolineras.component.html',
  styleUrls: ['./list-gasolineras.component.css']
})
export class ListGasolinerasComponent implements OnInit{
  listGasolineras: Gasolinera[] = [];

  constructor(private _gasolineraService: GasolineraService) { }

  ngOnInit(): void {
    this.getGasolineras();
  }

  getGasolineras() {
    this._gasolineraService.getGasolineras().subscribe(data => {
      console.log(data);
      this.listGasolineras = data;
    }, error => {
      console.log(error);
    })
  }

  deleteGasolinera(id: any){
    this._gasolineraService.deleteGasolinera(id).subscribe(data => {
      this.getGasolineras();
    }, error => {
      console.log(error)
    })
  }

}


