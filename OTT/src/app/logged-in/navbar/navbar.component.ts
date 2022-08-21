import { HttpErrorResponse } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AllServiceService } from 'src/app/all-service.service';
import { Users } from 'src/app/users';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  users: any;
  ID! : number;
  logoutForm!: FormGroup;
  formbuilder: any;
  User:Users[]=[];
  user: any;
  
  constructor(public sarv: AllServiceService, public router: Router) { }
  
  ngOnInit(): void {
    this.retrieveAllUsers()
    this.logoutForm = this.formbuilder.group({
      status: [false],
     })
     
}

  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any){
    
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
        return;
    }
  if (window.scrollY === 0) {
    navbarCollapsible.classList.remove('navbar-shrink')
} else {
    navbarCollapsible.classList.add('navbar-shrink')
}
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
      //console.log(this.user);
    },
      error => {
        console.log(error);
      })
  }

  public loggingOut(): void{
    this.sarv.getuser(this.ID+1).subscribe(data => {
      this.User.push( JSON.parse(JSON.stringify(data)));
      this.User[0].status = 0;
      

      this.sarv.updateUser(this.User[0],this.ID+1).subscribe(data => {
        alert("Data sent successfully")
        this.User=[]
        
        this.router.navigate([''])
      })
    },
      error => {
        console.log(error);
      })
    }



}
