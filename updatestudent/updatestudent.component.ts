import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrl: './updatestudent.component.css'
})
export class UpdatestudentComponent implements OnInit {
  
  id!:number;
  stud:Student=new Student();
  constructor(private studentService:StudentService , private route:ActivatedRoute, private router:Router){

  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.stud=new Student();
    this.studentService["getStudentById"](this.id).subscribe((data:Student)=>
    {
      this.stud=data;
    }, 
    (error:any)=> console.log(error));
    
  }

  onSubmit() {
    this.studentService["updateStudent"](this.id,this.stud).subscribe((data:any)=>
    {
      alert("updation succuss!!");
      this.router.navigate(["/students-list"]);
    })
  }

}
