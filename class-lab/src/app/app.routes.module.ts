import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
const appRoutes: Routes = [
  {
    path: 'users',
    loadChildren: './user/app.user.module#AppUserModule'
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
export class AppRoutesModule{
  
}