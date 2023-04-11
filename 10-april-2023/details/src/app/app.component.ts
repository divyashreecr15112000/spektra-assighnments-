import { Component } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  
})
export class AppComponent {

  students!:any[];
  constructor(private _student:StudentService){}
  displaystudent():any[]{

  
    this.students=this._student.getstudents();
    return this.students;
  }
  }

 


