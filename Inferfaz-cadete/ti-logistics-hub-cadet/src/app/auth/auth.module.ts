import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { PagesModule } from './pages/pages.module';
import { MaterialModule } from '../material.module';
// import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PagesModule,
    MaterialModule
  ],
  exports:[
  ]
})
export class AuthModule { }
