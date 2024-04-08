import { Component, OnInit } from '@angular/core';
import { Faculty } from '../faculty';
import { ActivatedRoute, Router } from '@angular/router';
import { FacultyService } from '../faculty.service';

@Component({
  selector: 'app-update-faculty',
  templateUrl: './update-faculty.component.html',
  styleUrl: './update-faculty.component.css'
})
export class UpdateFacultyComponent implements OnInit {
 
  id!:number;
  facobj:Faculty=new Faculty();
  constructor(private facultyService:FacultyService ,private route:ActivatedRoute, private router:Router) {

  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.facultyService["getFacultyById"](this.id).subscribe((data:Faculty)=>
    {
      this.facobj=data;
    },
    (error:any)=> console.log(error) );
  }

  onSubmit() {
    this.facultyService["updateFaculty"](this.id,this.facobj).subscribe((data:any)=>
    {
      alert("updation success");
      this.router.navigate(["/faculty-list"]);
    },
    (error:any) => console.log(error) );
  }
}
