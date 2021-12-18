import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MaterialModule } from '../../material.module';



@NgModule({
  declarations: [
    NavMenuComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    NavMenuComponent,
  ]
})
export class ComponentsModule { }
