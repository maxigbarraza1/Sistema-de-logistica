import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { ViajesComponent } from './viajes/viajes.component';
import { HistorialComponent } from './historial/historial.component';
import { ListasComponent } from './listas/listas.component';
import { MaterialModule } from 'src/app/material.module';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    RegistroComponent,
    ViajesComponent,
    HistorialComponent,
    ListasComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  exports:[
    HomeComponent,
    RegistroComponent,
    ViajesComponent,
    HistorialComponent,
    ListasComponent
  ]
})
export class PagesModule { }
