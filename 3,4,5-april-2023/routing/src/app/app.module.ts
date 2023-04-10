import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MysoreComponent } from './mysore/mysore.component';
import { BangloreComponent } from './banglore/banglore.component';

@NgModule({
  declarations: [
    AppComponent,
    MysoreComponent,
    BangloreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
