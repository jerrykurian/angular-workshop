import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HighlightDirective } from './shared/highlight.directive';
import { AppRoutesModule } from './app.routes.module';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutesModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
