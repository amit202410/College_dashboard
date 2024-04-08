import { Component, OnInit } from '@angular/core';
import { Faculty } from '../faculty';
import { Router } from '@angular/router';
import { FacultyService } from '../faculty.service';

@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  styleUrl: './faculty-list.component.css'
})
export class FacultyListComponent implements OnInit{

  facultys!:Faculty[];
  alldata!:Faculty[];

  facultysearch = "";
  

  constructor(private facultyService:FacultyService , private router:Router){

  }

  p:number = 1;
  count:number = 8;
  totalList:any;


  ngOnInit(): void {
   this.getFacultys();
  }
  private getFacultys() {
    this.facultyService.getFacultysList().subscribe((data)=>
      {
        this.facultys=data;
        this.alldata=data;
        this.totalList = data.length;
      });
  }

  facultytDetails(id:number)
  {
    this.router.navigate(["facultydetails",id]);
  }

  updateFaculty(id:number)
  {
    this.router.navigate(["updatefaculty",id]);
  }

  deleteFaculty(id:number)
  {
    this.facultyService.deleteFaculty(id).subscribe(data=>
      {
        console.log(data);
        this.getFacultys();
      });
  }

  filterdata() {
    this.facultys = this.alldata. filter((p) =>
    {
      return p.lastName.toLowerCase().includes(this.facultysearch.toLowerCase());
    });
  }

}
