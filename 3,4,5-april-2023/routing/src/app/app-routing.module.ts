import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MysoreComponent } from './mysore/mysore.component';
import { BangloreComponent } from './banglore/banglore.component';

const routes: Routes = [
  {
    path:'mysorelink',component:MysoreComponent
  },
  {
    path:'banglorelink',component:BangloreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
