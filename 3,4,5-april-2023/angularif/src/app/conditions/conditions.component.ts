import { Component } from '@angular/core';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent {
   
  selectoption:string="";
  onselect(option:string){
    this.selectoption = option;
  }



  
}
