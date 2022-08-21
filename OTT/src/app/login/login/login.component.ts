import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllServiceService } from 'src/app/all-service.service';
import { Users } from 'src/app/users';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ID!:number;
  users:any;
  user:Users[]=[];
  flag=0;

  public loginForm!: FormGroup;
  
  constructor(private formbuilder: FormBuilder,public allServices: AllServiceService, private route: Router  ) { }
  
  ngOnInit(): void {
    this.retrieveAllUsers();
    console.log(this.users);

    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+.com$")]],
      password: ['', [Validators.required]],
     })
  }


  retrieveAllUsers():void{
    this.allServices.getAllUsers().subscribe(data =>{
      this.users = JSON.parse(JSON.stringify(data));
      console.log(this.users);},
      error=>{
        console.log(error);
      })
  }
  retrieveIdUsers(id: any): void {
    this.allServices.getuser(id+1).subscribe(data => {
      this.user.push( JSON.parse(JSON.stringify(data)));
      console.log(this.user);
      this.setValues();
    },
      error => {
        console.log(error);
      })
  }

  setValues():void{
  
  this.user[0].status=1
  this.allServices.updateUser(this.user[0],this.ID+1).subscribe(data=>{
    
  },
  (error: HttpErrorResponse)=>{
    alert(error.message);
    this.loginForm.reset();
  })
  }

  validateCheck():void{
    
    let i=0;
    let flag = false;

    for(i=0; i<this.users.length;i++){
      if(this.loginForm.value.email==this.users[i].email && this.loginForm.value.password==this.users[i].password){
        flag=true;
        break;
      }
    }

    if(flag){
      
      this.loginForm.reset();
      flag=false;
      this.ID=i;
      this.retrieveIdUsers(i);       
      this.toggleDisplaySuccess()
    }
    else{
      this.toggleDisplayFailure()
      this.loginForm.reset();
    }
    
  }
  isShowFail= true;
  isShowSent = true;

  public toggleDisplaySuccess() {
    this.isShowSent = !this.isShowSent;  
    setTimeout(()=>{this.route.navigate(['/in'])},2000);
    ;
  }

  public toggleDisplayFailure() {
    this.isShowFail = !this.isShowFail;  
    
  }
}
