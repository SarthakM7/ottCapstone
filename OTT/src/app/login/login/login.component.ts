import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllServiceService } from 'src/app/all-service.service';
import { HomeComponent } from 'src/app/logged-in/home/home.component';
import { LoggedInModule } from 'src/app/logged-in/logged-in.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users:any;
  flag=0;

  public loginForm!: FormGroup;
  
  constructor(private allServices: AllServiceService, private route: Router, private http:HttpClient, private formbuilder: FormBuilder ) { }
  
  ngOnInit(): void {
    this.retrieveAllUsers();
    console.log(this.users);

    // this.loginForm = this.formbuilder.group({
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required]],
    //   active :Boolean,
      
    // })
  }


  retrieveAllUsers():void{
    this.allServices.getAllUsers().subscribe(data =>{
      this.users = JSON.parse(JSON.stringify(data));
      console.log(this.users);},
      error=>{
        console.log(error);
      })
  }
  validateCheck(username:HTMLInputElement, password:HTMLInputElement):boolean{
    
    let un = username.value;
    let pw = password.value;
    let i=0;
    let flag = false;

    for(i=0; i<this.users.length;i++){
      if(un==this.users[i].email && pw==this.users[i].password){
        // this.route.navigate(["home"]);
        flag=true;
        break;
      }
    }

    if(flag){
      window.alert("works");
      this.route.navigate(['/in']);
      //this.route.navigate(['../../in'])
      flag=false;
    }
    else{
      window.alert("does not work");
    }
    return flag;
  }

}
