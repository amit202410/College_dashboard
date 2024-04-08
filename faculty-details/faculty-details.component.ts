import { Component, OnInit } from '@angular/core';
import { Faculty } from '../faculty';
import { FacultyService } from '../faculty.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-faculty-details',
  templateUrl: './faculty-details.component.html',
  styleUrl: './faculty-details.component.css'
})
export class FacultyDetailsComponent implements OnInit{
  
    id!:number;
    faculty!:Faculty;
    constructor(private facultyService:FacultyService , private route:ActivatedRoute, private router:Router){
  
    }
  
    ngOnInit(): void {
      this.id=this.route.snapshot.params["id"];
      this.faculty=new Faculty();
      this.facultyService["getFacultyById"](this.id).subscribe((data:Faculty)=>
      {
        this.faculty=data;
      });
      
    }
  
  }
