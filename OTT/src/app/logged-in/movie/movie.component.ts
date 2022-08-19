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
  constructor(private allServices: AllServiceService, private router: Router,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.retrieveAllMovies();
    this.retrieveIdMovies(this.allServices.tempo);
    
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
      console.log(this.movies);
      console.log("inside movie trailer:  "+this.here.tralier);
      console.log("inside movie"+this.here.moviename);
      console.log("safe?");
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.here.tralier);
    console.log("safe: "+this.safeSrc);
    console.log("end");
    },
      error => {
        console.log(error);
      })

  }

  retrieveAllUsers(): void {
    this.allServices.getAllUsers().subscribe(data => {
      this.movies = JSON.parse(JSON.stringify(data));
      console.log(this.movies);
    },
      error => {
        console.log(error);
      })
  }

  retrieveIdUsers(id: any): void {
    this.allServices.getuser(id).subscribe(data => {
      this.movies = JSON.parse(JSON.stringify(data));
      console.log(this.movies);
    },
      error => {
        console.log(error);
      })
  }
}
