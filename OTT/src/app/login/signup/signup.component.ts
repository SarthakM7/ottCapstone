import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AllServiceService } from 'src/app/all-service.service';
import { Users } from 'src/app/users';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  User:Users[]=[];
  public signupForm!: FormGroup;
  constructor(private formbuilder:FormBuilder,private allServices: AllServiceService) { }
  
  ngOnInit(): void {

    
    this.signupForm = this.formbuilder.group({
      fname: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      lname: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      mobile: ['', [Validators.required, Validators.pattern('^(?=.*?[0-9]).{10,10}$')]],
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+.com$")]],
      password: ['', [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&#._])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{5,10}')]],
      active :Boolean,
    })
      

  }

  public AddUser(): void{
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
