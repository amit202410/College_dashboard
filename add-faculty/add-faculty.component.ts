import { Component, OnInit } from '@angular/core';
import { Faculty } from '../faculty';
import { FacultyService } from '../faculty.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrl: './add-faculty.component.css'
})
export class AddFacultyComponent implements OnInit {
  facobj:Faculty=new Faculty();
  constructor(private facultyService:FacultyService , private router:Router) {

  }
  ngOnInit(): void {
    
  }

  saveFaculty () {
    this.facultyService['createFaculty'](this.facobj).subscribe((data:any)=>
    {
      console.log(data);
    },
    (error:any)=>console.log(error));
  }

  onSubmit ()
  {
    console.log(this.facobj);
    this.saveFaculty();
    alert("Successfully added Faculty");
    this.router.navigate(['/faculty-list']);
  }

}


