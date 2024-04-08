import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentregister',
  templateUrl: './studentregister.component.html',
  styleUrl: './studentregister.component.css'
})
export class StudentregisterComponent implements OnInit {

  stud:Student=new Student();
  constructor(private studentService:StudentService, private router:Router) {

  }

  ngOnInit(): void {
    
  }

  saveStudent () {
    this.studentService['createStudent'](this.stud).subscribe((data:any)=>
    {
      console.log(data);
      this.goToStudentList();
    },
    (error:any)=>console.log(error));
  }
  goToStudentList() {
    this.router.navigate(['/studentlogin']);
  }


  onSubmit()
{ 
  console.log(this.stud);
  this.saveStudent();
  alert("Successfully registered..!");
  this.router.navigate(['/studentlogin']);
}

}
