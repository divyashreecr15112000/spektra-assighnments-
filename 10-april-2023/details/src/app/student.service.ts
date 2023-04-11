import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students=
    [{
      studentid:'100',studentname:'divya',email:'abc@gmail.com',contact:'1234567'
    },
    {
      studentid:'101',studentname:'archana',email:'abc@gmail.com',contact:'1234567'

    },
    {
      studentid:'102',studentname:'vanditha',email:'abc@gmail.com',contact:'1234567'

    },
    {
      studentid:'103',studentname:'latha',email:'abc@gmail.com',contact:'1234567'

    },
    {
      studentid:'104',studentname:'mangala',email:'abc@gmail.com',contact:'1234567'

    }
  ];

  getstudents(){
  return this.students;
}

}
