import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontComponent } from './front/front.component';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';

const routes: Routes = [
  {
    path:'frontlink',component:FrontComponent 
  },
  {
    path:'product1link',component:Product1Component
  },
  {
    path:'product2link',component: Product2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
