import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClientComponent } from './client/client.component';
import { HcworkerComponent } from './hcworker/hcworker.component';
import { HosadminComponent } from './hosadmin/hosadmin.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import {LoginModule} from './login/login.module'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientComponent,
    HcworkerComponent,
    HosadminComponent,
    SuperadminComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
