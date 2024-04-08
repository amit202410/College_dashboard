import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrl: './student-login.component.css'
})
export class StudentLoginComponent {

  email: string = '';
  password: string = '';

  constructor(private router: Router, private httpClient: HttpClient) {}
  
  Studentlogin() {
    const credentials = {
      email: this.email,
      password: this.password
    };

    this.httpClient.post('http://localhost:8080/api/student/login', credentials).subscribe(
      (response: any) => {
        alert("Login successful");
        console.log('Login successful:', response);
        this.router.navigate(['/studentportal']);
      },
      (error: any) => {
        alert("Login failed. Please check your credentials.");
        console.error('Login failed:', error);
      }
    );
  } 

}
