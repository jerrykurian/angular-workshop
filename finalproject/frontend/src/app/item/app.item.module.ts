import { NgModule } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { AppNewItemComponent } from './new/app.new.item.component';
import { AppItemRoutesModule } from './app.item.routes';
@NgModule({
  declarations: [
    AppNewItemComponent
  ],
  imports: [
  	AppItemRoutesModule
  ],
  providers: []
})
export class AppItemModule { }
