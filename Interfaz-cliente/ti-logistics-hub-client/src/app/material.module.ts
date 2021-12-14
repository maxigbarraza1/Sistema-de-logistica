import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';






const uiModules =[
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatInputModule,
  MatMenuModule,
  MatDividerModule,
  MatTableModule,
  MatPaginatorModule,
  // MatPaginator,
  // MatSort,
  // MatTableDataSource,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    uiModules
  ],
  exports: [
    BrowserAnimationsModule,
    uiModules,
  ]
})
export class MaterialModule { }
