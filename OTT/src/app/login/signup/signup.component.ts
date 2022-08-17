import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { AllServiceService } from 'src/app/all-service.service';
import { Users } from 'src/app/users';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private allServices: AllServiceService,private formbuilder:FormBuilder) { }
  User:Users[]=[];
  signupForm!: FormGroup;
  ngOnInit(): void {
    
    this.signupForm = this.formbuilder.group({
      fname :    [''],
      lname :    [''],
      mobile:    [''],
      email:    [''],
      password:    ['']
    })
      

  }

  public AddUser(): void{
    // document.getElementById('add-user-form')?.click();
    this.allServices.addUser(this.signupForm.value).subscribe(
      data => {
        alert("Data sent successfully")
        console.log(this.signupForm.value);
        this.signupForm.reset();
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
        this.signupForm.reset();
      }
    )
  }

}
