import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { SolicitarViajeComponent } from './solicitar-viaje/solicitar-viaje.component';
import { EstadoViajeComponent } from './estado-viaje/estado-viaje.component';
import { HistorialComponent } from './historial/historial.component';

import { AppRoutingModule } from '../app-routing.module';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InicioComponent,
    LoginComponent,
    SolicitarViajeComponent,
    EstadoViajeComponent,
    HistorialComponent,
  ],
  imports: [
    AppRoutingModule,
    ComponentsModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports:[
    InicioComponent,
    LoginComponent,
    SolicitarViajeComponent,
    EstadoViajeComponent,
    HistorialComponent,
  ]
})
export class PagesModule { }
