import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatSelectModule} from '@angular/material/select';


const uiModules=[
  MatButtonModule,
  MatInputModule,
  MatMenuModule,
  MatDividerModule,
  MatCardModule,
  ScrollingModule,
  MatSelectModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    uiModules,
  ],
  exports: [
    uiModules,
  ]
})
export class MaterialModule { }
