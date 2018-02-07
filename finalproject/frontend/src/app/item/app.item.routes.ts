import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { AppNewItemComponent } from './new/app.new.item.component';
const itemRoutes: Routes = [
  { 
    path: '', 
    redirectTo: 'new',
    pathMatch: 'full'
  },
  {
    path: 'new',
    component: AppNewItemComponent
  }
  //{ path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(
      itemRoutes
    )
    // other imports here
  ]
})
export class AppItemRoutesModule{
  
}