import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { PagesModule } from './pages/pages.module';
//Materialize
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    //Components
    PagesModule,
    //Material
    MaterialModule,
  ],
  providers: [/*Servicios*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
