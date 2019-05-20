import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { Login2Component } from './login2.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,LoginComponent,
    Login2Component
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
