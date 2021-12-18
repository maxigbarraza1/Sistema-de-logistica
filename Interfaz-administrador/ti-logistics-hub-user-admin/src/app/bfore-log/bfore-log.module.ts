import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BforeLogRoutingModule } from './bfore-log-routing.module';
import { PagesModule } from './pages/pages.module';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BforeLogRoutingModule,
    PagesModule,
    MaterialModule,
  ],exports:[
    PagesModule,
  ]
})
export class BforeLogModule { }
