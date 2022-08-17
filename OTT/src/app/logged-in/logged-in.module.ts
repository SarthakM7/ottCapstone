import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TemplateComponent } from './template/template.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"movies/:id",component: MovieComponent},
];


@NgModule({
  declarations: [
    HomeComponent,
    MovieComponent,
    TemplateComponent,
    ProfileComponent
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
