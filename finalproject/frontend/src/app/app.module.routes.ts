import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
const appRoutes: Routes = [
  { 
    path: '', 
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './main/app.main.module#AppMainModule'
  },
  {
    path: 'items',
    loadChildren: './item/app.item.module#AppItemModule'
  }
  //{ path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ]
})
export class AppModuleRoutes{
  
}