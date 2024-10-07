import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MastersComponent } from './masters.component';
import { MasterRoutingModule } from './master.routing.module';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatDialogModule } from '@angular/material/dialog';
import { AngularFileUploaderModule } from "angular-file-uploader";

@NgModule({
  declarations: [MastersComponent],
  imports: [
    CommonModule,
    MasterRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    ScrollingModule,
    MatDialogModule,
    AngularFileUploaderModule
  ]
})
export class MastersModule { }
