import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit{

  datetoday: string="";
  name:string="";
  sen:string="";

  constructor(){}
  ngOnInit(): void {
    this.datetoday = new Date().toDateString();
    this.name =" divyashree "
    this.sen =" welcome to the angular"
    
  }

}
