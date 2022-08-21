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
  users:any;
  User:Users[]=[];
  
  ID:number=-1;
  public profileForm! : FormGroup;
  user: any;
  constructor(public sarv:AllServiceService, public formbuilder:FormBuilder, public route:Router) { }

  ngOnInit(): void {
    // console.log(this.sarv.userLoggedinID);

    
    // this.makenow();
    this.retrieveAllUsers();
    this.profileForm = this.formbuilder.group({
      fname: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      lname: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      mobile: ['', [Validators.required, Validators.pattern('^(?=.*?[0-9]).{10,10}$')]],
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+.com$")]],
      password: ['', [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&#._])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{5,10}')]],
      active :Boolean,
    });
  }
  
  
  retrieveAllUsers():void{
    this.sarv.getAllUsers().subscribe(data =>{
      this.users = JSON.parse(JSON.stringify(data));
      this.getUser();
      this.makenow();
    },
      error=>{
        console.log(error);
      })
  }

  
  getUser(){
    let i=0
    for(i;i<this.users.length;i++){
      if(this.users[i].status ===true){
        console.log("Inside Get User")
        this.ID=i;
      }
    }
  }

  makenow()
  {
    console.log("Inside makenow");
    this.sarv.getuser(this.ID+1).subscribe(data => {
      this.user = JSON.parse(JSON.stringify(data));
      console.log(this.user);
    },
      error => {
        console.log(error);
      })
  }

  public updateUserDetails(): void{
    this.sarv.getuser(this.ID+1).subscribe(data => {
      this.User.push( JSON.parse(JSON.stringify(data)));
      this.User[0].fname = this.profileForm.value.fname;
      this.User[0].lname = this.profileForm.value.lname;
      this.User[0].mobile = this.profileForm.value.mobile;
      this.User[0].email = this.profileForm.value.email;
      //this.User[0].password = this.profileForm.value.password;

      this.sarv.updateUser(this.User[0],this.ID+1).subscribe(data => {
        alert("Data sent successfully")
        this.User=[];
        this.profileForm.reset();
        //this.toggleDisplaySuccess()
        //this.route.navigate([''])
      })
    },
      error => {
        console.log(error);
      })
    // this.sarv.updateUser(this.profileForm.value).subscribe(
    //   data => {
    //     alert("Data sent successfully")
    //     console.log(this.profileForm.value);
    //     this.profileForm.reset();
    //     //this.toggleDisplaySuccess();f
    //     this.route.navigate([''])
    //   },
    //   (error: HttpErrorResponse)=>{
    //     alert(error.message);
    //     this.profileForm.reset();
    //   }
    // )
  }
}

