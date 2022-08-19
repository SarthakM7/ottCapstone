import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllServiceService } from 'src/app/all-service.service';
import { Users } from 'src/app/users';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  User:Users[]=[];
  public profileForm! : FormGroup;
  constructor(public sarv:AllServiceService, public formbuilder:FormBuilder, public route:Router) { }

  ngOnInit(): void {
    console.log(this.sarv.userLoggedinID);

    this.profileForm = this.formbuilder.group({
      fname: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      lname: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      mobile: ['', [Validators.required, Validators.pattern('^(?=.*?[0-9]).{10,10}$')]],
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+.com$")]],
      password: ['', [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&#._])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{5,10}')]],
      active :Boolean,
    });
    this.makenow();
  }
  user:any=""
  
  acctype:any=""
  ID: any = this.sarv.userLoggedinID;
  

  makenow()
  {
    this.sarv.getuser(this.sarv.userLoggedinID).subscribe(data => {
      this.user = JSON.parse(JSON.stringify(data));
    },
      error => {
        console.log(error);
      })
  }

  public updateUserDetails(): void{
    this.sarv.updateUser(this.profileForm.value).subscribe(
      data => {
        alert("Data sent successfully")
        console.log(this.profileForm.value);
        this.profileForm.reset();
        //this.toggleDisplaySuccess();
        this.route.navigate([''])
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
        this.profileForm.reset();
      }
    )
  }
}

