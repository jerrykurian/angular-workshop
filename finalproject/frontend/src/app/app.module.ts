import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppNavComponent } from './layout/nav/app.nav.component';
import { AppFooterComponent } from './layout/footer/app.footer.component';
import { AppModuleRoutes } from './app.module.routes';
@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule,
    AppModuleRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
