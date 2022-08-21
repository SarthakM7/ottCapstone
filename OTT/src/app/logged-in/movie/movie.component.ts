import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { AllServiceService } from 'src/app/all-service.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies: any;
  here:any;
  users:any;
  safeSrc: any; 
  currUser:any;
  ID! : number;
  constructor(private allServices: AllServiceService, private router: Router,private sanitizer: DomSanitizer, private _router: Router) { }

  ngOnInit(): void {
    this.retrieveAllMovies();
    this.retrieveIdMovies(this.allServices.tempo);
    this.retrieveAllUsers();
    
    
  }

  retrieveAllMovies(): void {
    this.allServices.getAllMovies().subscribe(data => {
      this.movies = JSON.parse(JSON.stringify(data));
      console.log(this.movies);     
    },
      error => {
        console.log(error);
      })
  }

  retrieveIdMovies(id: any): void {
    id=this.allServices.tempo;
    this.allServices.getmovie(id).subscribe(data => {
      console.log("inside retidmovie"+id);
      this.here = JSON.parse(JSON.stringify(data));
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.here.tralier);
    
    },
      error => {
        console.log(error);
      })

  }

  retrieveAllUsers():void{
    this.allServices.getAllUsers().subscribe(data =>{
      this.users = JSON.parse(JSON.stringify(data));
      this.getUser();
      this.retrieveIdUsers(this.ID)
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
        console.log(this.ID)
      }
    }
  }

  retrieveIdUsers(id: any): void {
    this.allServices.getuser(id+1).subscribe(data => {
      this.currUser = JSON.parse(JSON.stringify(data));
      console.log(this.currUser.fname);
    },
      error => {
        console.log(error);
      })
  }
  buy(){
    this._router.navigateByUrl("payment")
  }

}
