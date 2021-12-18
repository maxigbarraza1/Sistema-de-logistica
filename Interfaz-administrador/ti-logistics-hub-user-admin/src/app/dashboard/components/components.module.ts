import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MaterialModule } from '../../material.module';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavMenuComponent,
    EditarUsuarioComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports:[
    NavMenuComponent,
    EditarUsuarioComponent
  ]
})
export class ComponentsModule { }
