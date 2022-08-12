import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


const routes: Routes = [
  {path:"",component: HomeComponent}
];


@NgModule({
  declarations: [
    HomeComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CarouselModule
  ],
  exports: [
    RouterModule
  ]
})
export class LoggedInModule { }
