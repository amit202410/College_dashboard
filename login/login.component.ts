import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent 
{
  userName!:string;
  password!:string;
  status="";
  submit!:boolean;
 
   constructor(private router:Router){}
 
   OnSubmit()
   {
     if(this.userName=="admin@gmail.com"&&this.password=="admin@123")
     {
       this.submit=true;
       alert("Login SuccessFull");
       this.router.navigate(['/admin-home']);
     }
     else
     {
       this.submit=false;
       this.status="Pleace Enter valid UserName and Password";
       alert("Login Failed");
       this.router.navigate(['/login']);
     }
     
   }
 
   goToHome()
   {
 
     this.router.navigate(['/home']);
   }
 
 }
 
