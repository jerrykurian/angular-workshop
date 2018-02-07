import { NgModule } from '@angular/core';
import { AppMainComponent } from './app.main.component';
import { Router, Routes, RouterModule } from '@angular/router';
const mainRoutes: Routes = [
  { 
    path: '', 
    component: AppMainComponent
  }
];
@NgModule({
  declarations: [
    AppMainComponent
  ],
  imports: [
  	RouterModule.forChild(mainRoutes)
  ],
  providers: []
})
export class AppMainModule { }
