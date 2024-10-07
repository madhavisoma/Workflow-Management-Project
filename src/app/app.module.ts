import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule} from '@angular/material/table';
import { MatInputModule} from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule} from '@angular/material/tooltip';
import { BankmasterComponent } from './masters/bankmaster/bankmaster.component';
import { ActivitymasterComponent } from './masters/activitymaster/activitymaster.component';
import { EmployeemasterComponent } from './masters/employeemaster/employeemaster.component';
import { RequestormasterComponent } from './masters/requestormaster/requestormaster.component';
import { ProjectmasterComponent } from './masters/projectmaster/projectmaster.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ResetpwdComponent } from './resetpwd/resetpwd.component';
import { NewrequestComponent } from './masters/newrequest/newrequest.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NewprojectComponent } from './masters/newproject/newproject.component';
import { EffortestimationComponent } from './masters/effortestimation/effortestimation.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { OpenPdfComponent } from './open-pdf/open-pdf.component';
import { UploadFileComponent } from './masters/upload-file/upload-file.component';
import { FileUploaderComponent } from './masters/file-uploader/file-uploader.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { TemplateComponent } from './masters/template/template.component';
import { NewprojDialogComponent } from './masters/newproj-dialog/newproj-dialog.component';
import { SetupmasterComponent } from './masters/setupmaster/setupmaster.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResetpwdComponent,
    BankmasterComponent,
    ActivitymasterComponent,
    EmployeemasterComponent,
    RequestormasterComponent,
    ProjectmasterComponent,
    NewrequestComponent,
    NewprojectComponent,
    EffortestimationComponent,
    OpenPdfComponent,
    UploadFileComponent,
    FileUploaderComponent,
    TemplateComponent,
    NewprojDialogComponent,
    SetupmasterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSortModule,
    HttpClientModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    ScrollingModule,
    PdfViewerModule,
    AngularFileUploaderModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
