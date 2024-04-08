import { Component, OnInit } from '@angular/core';
import { Faculty } from '../faculty';
import { Router } from '@angular/router';
import { FacultyService } from '../faculty.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-faculty-login',
  templateUrl: './faculty-login.component.html',
  styleUrl: './faculty-login.component.css'
})
export class FacultyLoginComponent {
  email: string = 'admin@gmail.com';
  password: string = 'admin@123';

  faculty!:Faculty;

  constructor(private router: Router, private httpClient: HttpClient , private facultyService:FacultyService) {}


 
  
  facualtylogin() {
    const credentials = {
      email: this.email,
      password: this.password


    };

   

    this.httpClient.post('http://localhost:8080/api/faculty/login', credentials).subscribe(
      (response: any) => {

        if(response == null){
          alert("Use proper credentials");
        }

        else{

        alert("Login successful");
        console.log(this.email);

      this.faculty=new Faculty();
      this.facultyService["getFacultyByEmail"](this.email).subscribe((data:any)=>
      {
        this.faculty=data;
        console.log(this.faculty);
      });

        console.log('Login successful:', response);
        this.router.navigate(['/facultyportal']);
    }
      },
      (error: any) => {
        alert("Login failed. Please check your credentials.");
        console.error('Login failed:', error);
      }
    );

      

  }

}
