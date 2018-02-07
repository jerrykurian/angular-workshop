import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { HighlightDirective } from '../shared/highlight.directive';
import { NewUserComponent } from './new/new.user.component';
import { UserServices } from '../services/user/user.services';
import { AppUserRoutesModule } from './app.user.routes.module';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    UserComponent,
    NewUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,    
    HttpModule,
    AppUserRoutesModule
  ],
  providers: [
    UserServices
  ]
})
export class AppUserModule { }
