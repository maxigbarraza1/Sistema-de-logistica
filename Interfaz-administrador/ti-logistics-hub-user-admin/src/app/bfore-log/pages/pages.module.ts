import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotComponent } from './forgot/forgot.component';



@NgModule({
  declarations: [
    HomeComponent,
    ForgotComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports:[
    HomeComponent,
    ForgotComponent,
  ]
})
export class PagesModule { }
