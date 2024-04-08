import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.css'
})
export class StudentsListComponent implements OnInit {
 
  students!:Student[];

  alldata!:Student[];

  studentsearch = "";
  
  constructor(private studentService:StudentService, private router:Router){

  }

  p:number = 1;
  count:number = 8;
  totalList:any;

  
  
  ngOnInit(): void {
    this.getStudents();
  }
  private getStudents() {
    this.studentService.getStudentsList().subscribe(data=>
      {
        this.students=data;
        this.totalList = data.length;
        this.alldata=data;
      });
  }

  studentDetails(id:number)
  {
    this.router.navigate(["studentdetails",id]);
  }

  updateStudent(id:number)
  {
    this.router.navigate(["updatestudent",id]);
  }

  deleteStudent(id:number)
  {
    this.studentService.deleteStudent(id).subscribe(data=>
      {
        console.log(data);
        this.getStudents();
      });
  }

  filterdata() {
    this. students= this.alldata. filter((p) =>
    {
      return p.lastName.toLowerCase().includes(this.studentsearch.toLowerCase());
    });
  }

}
