import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistorialComponent } from './historial/historial.component';
import { HomeComponent } from './home/home.component';
import { ViajesComponent } from './viajes/viajes.component';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../../material.module';
import { TroubleComponent } from './trouble/trouble.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from 'src/app/shared/spinner/spinner.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    ViajesComponent,
    HistorialComponent,
    TroubleComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
  ],
  exports:[
    HomeComponent,
    ViajesComponent,
    HistorialComponent,
  ]
})
export class PagesModule { }
