import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatRadioModule} from '@angular/material/radio';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatTableModule,
    MatDividerModule,
    MatDatepickerModule,
    MatDialogModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  exports: [
    MatRadioModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSelectModule,
    MatDividerModule,
    MatCardModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
  ]
})
export class MaterialModule { }
