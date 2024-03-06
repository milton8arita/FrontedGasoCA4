import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { GasolineraComponent } from './components/gasolinera/gasolinera.component';
import { ListGasolinerasComponent } from './components/list-gasolineras/list-gasolineras.component';
import { ListProductosComponent } from './components/list-productos/list-productos.component';
import { ProductosComponent } from './components/productos/productos.component';
import { AdminComponent } from './components/admin/admin.component';
import { IncidentesComponent } from './components/incidentes/incidentes.component';
import { ListEventosComponent } from './components/list-eventos/list-eventos.component';
import { ListIncidentesComponent } from './components/list-incidentes/list-incidentes.component';
import { ListUsuariosComponent } from './components/list-usuarios/list-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarseComponent,
    LoginComponent,
    InicioComponent,
    GasolineraComponent,
    ListGasolinerasComponent,
    ListProductosComponent,
    ProductosComponent,
    AdminComponent,
    IncidentesComponent,
    ListEventosComponent,
    ListIncidentesComponent,
    ListUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
