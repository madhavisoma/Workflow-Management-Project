import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'masters',
    loadChildren: ()=>import('./masters/masters.module').then(m => m.MastersModule)
  },
  {
    path:'Authentication',
    loadChildren: ()=>import('./authentication/authentication.module').then(m=>m.AuthenticationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
