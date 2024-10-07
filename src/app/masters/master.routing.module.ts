import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActivitymasterComponent } from "./activitymaster/activitymaster.component";
import { BankmasterComponent } from "./bankmaster/bankmaster.component";
import { EffortestimationComponent } from "./effortestimation/effortestimation.component";
import { EmployeemasterComponent } from "./employeemaster/employeemaster.component";
import { FileUploaderComponent } from "./file-uploader/file-uploader.component";
import { MastersComponent } from "./masters.component";
import { NewprojectComponent } from "./newproject/newproject.component";
import { NewrequestComponent } from "./newrequest/newrequest.component";
import { ProjectmasterComponent } from "./projectmaster/projectmaster.component";
import { RequestormasterComponent } from "./requestormaster/requestormaster.component";
import { SetupmasterComponent } from "./setupmaster/setupmaster.component";
import { TemplateComponent } from "./template/template.component";
import { UploadFileComponent } from "./upload-file/upload-file.component";

const router: Routes = [
  {
    path:'',
    component:MastersComponent,
    children: [
      {
        path:'activity',
        component:ActivitymasterComponent
      },
      {
        path:'employee',
        component:EmployeemasterComponent
      },
      {
        path:'requestor',
        component:RequestormasterComponent
      },
      {
        path:'projectmaster',
        component:ProjectmasterComponent
      },
      {
        path:'bankmaster',
        component:BankmasterComponent
      },
      {
        path:'newreq',
        component:NewrequestComponent
      },
      {
        path:'newproj',
        component:NewprojectComponent
      },
      {
        path:'effort',
        component:EffortestimationComponent
      },
      {
        path:'upload',
        component:UploadFileComponent
      },
      {
        path:'file-upload',
        component:FileUploaderComponent
      },
      {
        path:'setup',
        component: SetupmasterComponent
      }
    ]
  },
  {
    path:'temp',
    component: TemplateComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule]
})

export class MasterRoutingModule{}
