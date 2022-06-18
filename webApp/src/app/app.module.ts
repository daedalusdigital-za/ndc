import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClientComponent } from './client/client.component';
import { HcworkerComponent } from './hcworker/hcworker.component';
import { HosadminComponent } from './hosadmin/hosadmin.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { AuthModule } from './auth/auth.module';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientComponent,
    HcworkerComponent,
    HosadminComponent,
    SuperadminComponent,
    ChildComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
