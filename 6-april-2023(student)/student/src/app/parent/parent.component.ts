import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ChildComponent } from '../child/child.component';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
  
})

export class ParentComponent  {

  
  students = [
    {id: 1, name: 'divya', gender: 'Female', dob: '01-01-2000', coursefee: 500},
    {id: 2, name: 'sanjay', gender: 'Male', dob: '02-02-2001', coursefee: 600},
    {id: 3, name: 'anil', gender: 'Male', dob: '03-03-2002', coursefee: 700},
    {id: 4, name: 'archana', gender: 'Female', dob: '04-04-2003', coursefee: 800},
    {id: 5, name: 'nithin', gender: 'Male', dob: '05-05-2004', coursefee: 900}
  ];
  


  onSubmit(form: NgForm) {
    const newStudent = {
      id: this.students.length + 1,
      name: form.value.studentName,
      gender: form.value.gender,
      dob: form.value.dob,
      coursefee: form.value.coursefee
    };
    this.students.push(newStudent);
    form.reset();
  }

  getTotalStudents() {
    return this.students.length;
  }
  
  getTotalMales() {
    return this.students.filter(student => student.gender === 'Male').length;
  }
  
  getTotalFemales() {
    return this.students.filter(student => student.gender === 'Female').length;
  }
  
 
  


}



  
  

  
  
  
 

