import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor(public sarv:AllServiceService, public formbuilder:FormBuilder) { }

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
  fname:any= ""
  lname:any= ""
<<<<<<< HEAD
  email:any= ""
  num:any=""
  acctype:any=""
  ID: any = this.sarv.userLoggedinID;
=======
  acctype:any=""
  
>>>>>>> parent of 921f8e3 (commented)
  makenow()
  {
    this.sarv.getuser(3).subscribe(data => {
      this.user = JSON.parse(JSON.stringify(data));
    },
      error => {
        console.log(error);
      })
      this.fname=this.user.fname;
      this.lname=this.user.lname;
<<<<<<< HEAD
      this.email=this.user.email;
      this.num=this.user.mobile;
=======
>>>>>>> parent of 921f8e3 (commented)
  }
}

