import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../../material.module';
import { RouterModule } from '@angular/router';
import { ViajeComponent } from './viaje/viaje.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { ViajeEntregadoComponent } from './viaje-entregado/viaje-entregado.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ViajeComponent,
    ViajeEntregadoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ScrollingModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ViajeComponent,
    ViajeEntregadoComponent,
  ]
})
export class ComponentsModule { }
