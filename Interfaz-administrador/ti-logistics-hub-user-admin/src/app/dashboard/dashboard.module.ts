import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from '../material.module';
import { PagesModule } from './pages/pages.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PagesModule,
    MaterialModule,
  ]
})
export class DashboardModule { }
