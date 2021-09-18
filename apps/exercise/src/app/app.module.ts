import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(ROUTES), FormsModule,
    CommonModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
