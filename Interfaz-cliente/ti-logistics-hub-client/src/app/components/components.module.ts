import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLandingComponent } from './header-landing/header-landing.component';
import { FooterLandingComponent } from './footer-landing/footer-landing.component';
import { MaterialModule } from '../material.module';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    HeaderLandingComponent,
    FooterLandingComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
  ],
  exports:[
    HeaderLandingComponent,
    FooterLandingComponent,
  ]
})
export class ComponentsModule { }
