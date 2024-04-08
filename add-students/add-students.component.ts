import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrl: './add-students.component.css'
})
export class AddStudentsComponent implements OnInit {
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
    this.router.navigate(['/students-list']);
  }


  onSubmit()
{ 
  console.log(this.stud);
  this.saveStudent();
  alert("Successfully registered..!");
  this.router.navigate(['/students-list']);
}
}
