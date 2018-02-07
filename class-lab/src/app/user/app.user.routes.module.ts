import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { NewUserComponent } from './new/new.user.component';
import { UserComponent } from './user.component';
const appUserRoutes: Routes = [
  { 
    path: '',redirectTo: 'list',pathMatch: 'full'
  },
  {
    path: 'list',component: UserComponent
  },
  {
    path: 'new',component: NewUserComponent
  },
  {
    path: 'view/:id',component: UserComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(
      appUserRoutes
    )
  ]
})
export class AppUserRoutesModule{}