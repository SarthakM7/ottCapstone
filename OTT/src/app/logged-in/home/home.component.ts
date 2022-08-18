import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AllServiceService } from 'src/app/all-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: any;
  hindiMovies: any[] = [];
  englishMovies: any[] = [];
  teluguMovies: any[] = [];
  horrorMovies: any[] = [];
  comedyMovies: any[] = [];
  romanceMovies: any[] = [];
  dramaMovies: any[] = [];
  thrillerMovies: any[] = [];
  index = 0;
  selectedLang = '';
  selectedGenre = '';
  users:any;

  constructor(private allServices: AllServiceService) { }
  ngOnInit(): void {
    this.retrieveAllMovies();

    //this.hindiMovieFilter();
    // this.retrieveIdMovies(1);
    // this.retrieveAllUsers();
    // this.retrieveIdUsers(2);

  }

  // languages: any = ['English', 'Hindi', 'Telugu'];
  // filter = new FormGroup
  // ({
  //   lang: new FormControl('', Validators.required)
  // });

  onSelected(value: string): void {
    this.selectedLang = value;
  }

  onSelectedGenre(value: string): void {
    this.selectedGenre = value;
  }

  hindiBest(): void {
    console.log("Inside hindibest function")
    for (let ind = 0; ind < this.movies.length; ind++) {
      if (this.movies[ind].movielang == 'Hindi') {
        this.hindiMovies.push(this.movies[ind]);
        console.log("here for hindii" + this.movies[ind].movieLang);
      }
      else {
        continue
      }
      console.log(this.horrorMovies);
    }
  }

  enlgishBest(): void {
    console.log("Inside enlgishbest function")
    for (let ind = 0; ind < this.movies.length; ind++) {
      if (this.movies[ind].movielang == 'English') {
        this.englishMovies.push(this.movies[ind]);
        // console.log("here for english"+this.movies[ind].movieLang);
      }
      else {
        continue
      }
      console.log(this.horrorMovies);
    }
  }
  teluguBest(): void {
    console.log("Inside telugubest function")
    for (let ind = 0; ind < this.movies.length; ind++) {
      if (this.movies[ind].movielang == 'Telugu') {
        this.teluguMovies.push(this.movies[ind]);
        // console.log("here for telugu"+this.movies[ind].movieLang);
      }
      else {
        continue
      }
    }
  }
// -----------------------------
  horrorMovieFilter(): void {
    for (let index = 0; index < this.movies.length; index++) {
      if (this.movies[index].genre.split(" ").includes("Horror")) {
        this.horrorMovies.push(this.movies[index]);
        console.log("here horros" + this.movies[index].genre);
      }
      else {
        continue
      }
      console.log(this.horrorMovies);
    }
  }

  comedyMovieFilter(): void {
    for (let index = 0; index < this.movies.length; index++) {
      if (this.movies[index].genre.split(" ").includes("Comedy")) {
        this.comedyMovies.push(this.movies[index]);
      }
      else {
        continue
      }
    }
  }
  romanceMovieFilter(): void {
    for (let index = 0; index < this.movies.length; index++) {
      if (this.movies[index].genre.split(" ").includes("Romance")) {
        this.romanceMovies.push(this.movies[index]);
        
      }
      else {
        continue
      }
    }
  }
  dramaMovieFilter(): void {
    for (let index = 0; index < this.movies.length; index++) {
      if (this.movies[index].genre.split(" ").includes("Drama")) {
        this.dramaMovies.push(this.movies[index]);
      }
      else {
        continue
      }
    }
  }
  thrillerMovieFilter(): void {
    for (let index = 0; index < this.movies.length; index++) {
      if (this.movies[index].genre.split(" ").includes("Thriller")) {
        this.thrillerMovies.push(this.movies[index]);
      }
      else {
        continue
      }
    }
  }

  retrieveAllMovies(): void {
    this.allServices.getAllMovies().subscribe(data => {
      this.movies = JSON.parse(JSON.stringify(data));
      console.log(this.movies);
      
      // console.log("HINDI best function here");
      this.hindiBest();
      this.enlgishBest();
      this.teluguBest();

      this.horrorMovieFilter();
      this.comedyMovieFilter();
      this.romanceMovieFilter();
      this.dramaMovieFilter();
      this.thrillerMovieFilter();
    },
      error => {
        console.log(error);
      })
  }

  retrieveIdMovies(id: any): void {
    this.allServices.getmovie(id).subscribe(data => {
      this.movies = JSON.parse(JSON.stringify(data));
      console.log(this.movies);
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

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 500,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 5
      }
    },
    nav: true
  }


}
