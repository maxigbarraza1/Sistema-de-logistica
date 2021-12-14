import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PagesModule } from './pages/pages.module';
import { MaterialModule } from '../material.module';
@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PagesModule,
    MaterialModule
  ],
  exports:[
    PagesModule
  ]
})
export class DashboardModule { }
