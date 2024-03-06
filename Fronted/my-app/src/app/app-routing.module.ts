import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrarseComponent} from './components/registrarse/registrarse.component';
import {LoginComponent} from './components/login/login.component';
import {InicioComponent} from './components/inicio/inicio.component';
import {GasolineraComponent} from './components/gasolinera/gasolinera.component';
import {ListGasolinerasComponent} from './components/list-gasolineras/list-gasolineras.component';
import { ListProductosComponent } from './components/list-productos/list-productos.component';
import { ProductosComponent } from './components/productos/productos.component';
import { AdminComponent } from './components/admin/admin.component';
import {ListUsuariosComponent} from './components/list-usuarios/list-usuarios.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'administradores', component: AdminComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'registrarse', component: RegistrarseComponent},
  {path: 'crear-gasolinera', component: GasolineraComponent},
  {path: 'lista-gasolinera', component: ListGasolinerasComponent},
  {path: 'edit-gasolinera/:id', component: GasolineraComponent},
  {path: 'lista-productos', component: ListProductosComponent},
  {path: 'crear-productos', component: ProductosComponent},
  {path: 'edit-productos/:id', component: ProductosComponent},
  {path: 'lista-usuarios', component: ListUsuariosComponent},
  {path: 'edit-usuarios/:id', component: RegistrarseComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
