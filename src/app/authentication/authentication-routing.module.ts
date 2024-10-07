import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ResetpwdComponent } from "../resetpwd/resetpwd.component";

const router: Routes = [
  {
    path:'resetpwd',
    component:ResetpwdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule],
})

export class AuthenticationRoutingModule{}
