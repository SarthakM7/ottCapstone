import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
  {path:"",component: HomeComponent},
  //{path: 'movie', component: MovieComponent}, //Movie Component can be child of Home and Child activation as well
  {path:"movies/:id",component: MovieComponent},
  {path: 'about', component: AboutComponent},
  {path:'profile',component:ProfileComponent},
];


@NgModule({
  declarations: [
    HomeComponent,
    MovieComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent
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
