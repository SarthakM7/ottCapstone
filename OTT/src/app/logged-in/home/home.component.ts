import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';
import { AllServiceService } from 'src/app/all-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies:any;
  horrorMovies: any[] = [];
  index=0;
  constructor(private allServices: AllServiceService) { }
  ngOnInit(): void {
    this.retrieveAllMovies();
    
      //this.hindiMovieFilter();
      // this.retrieveIdMovies(1);
      // this.retrieveAllUsers();
      // this.retrieveIdUsers(2);
  }
  horrorMovieFilter():void{
    for (let index = 0; index < this.movies.length; index++) {
      if(this.movies[index].genre.split(" ").includes("Horror")){
        this.horrorMovies.push(this.movies[index]);
        console.log(this.movies[index]);
      }
      else{
        continue
      }
      console.log(this.horrorMovies);
    }
  }
  retrieveAllMovies():void{
    this.allServices.getAllMovies().subscribe(data =>{
      this.movies = JSON.parse(JSON.stringify(data));
      console.log(this.movies);
      this.horrorMovieFilter();
    },
      error=>{
        console.log(error);
      })
  }
  retrieveIdMovies(id: any):void{
    this.allServices.getmovie(id).subscribe(data =>{
      this.movies = JSON.parse(JSON.stringify(data));
      console.log(this.movies);},
      error=>{
        console.log(error);
      })
  }

  retrieveAllUsers():void{
    this.allServices.getAllUsers().subscribe(data =>{
      this.movies = JSON.parse(JSON.stringify(data));
      console.log(this.movies);},
      error=>{
        console.log(error);
      })
  }

  retrieveIdUsers(id: any):void{
    this.allServices.getuser(id).subscribe(data =>{
      this.movies = JSON.parse(JSON.stringify(data));
      console.log(this.movies);},
      error=>{
        console.log(error);
      })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 2
      },
      760: {
        items: 4
      }
    },
    nav: true
  }

}
