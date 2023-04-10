import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {

 public selected ="";
 setvalue(value : any){
  this.selected = value.target.value;
 }

}
