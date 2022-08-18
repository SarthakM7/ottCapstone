import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllServiceService } from 'src/app/all-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users:any;
  flag=0;

  public loginForm!: FormGroup;
  
  constructor(private formbuilder: FormBuilder,public allServices: AllServiceService, private route: Router  ) { }
  
  ngOnInit(): void {
    this.retrieveAllUsers();
    console.log(this.users);

    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+.com$")]],
      password: ['', [Validators.required]],
      active :Boolean,
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
      //window.alert("works");
      this.loginForm.reset();
      flag=false;
      this.allServices.userLoggedinID=i;
      window.alert(this.allServices.userLoggedinID);
      this.route.navigate(['/in']);
    }
    else{
    //window.alert("No user with this credentials");
      this.loginForm.reset();
    }
    
  }

}
