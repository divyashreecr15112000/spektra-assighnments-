import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { appComponent } from './app.component';
import { HelloworldComponent } from './helloworld/helloworld.component';



@NgModule({
  declarations: [
    appComponent,
    HelloworldComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [HelloworldComponent]
})
export class AppModule { }
