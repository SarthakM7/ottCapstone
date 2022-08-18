import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './logged-in/about/about.component';

import { MovieComponent } from './logged-in/movie/movie.component';

import { NotfoundComponent } from './notfound/notfound.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
//  { path: '', redirectTo: 'login/LoginComponent', pathMatch: 'full'},
    {path: "Auth",  loadChildren: () => import("./login/login.module").then(m => m.LoginModule)
    //Lazy loading for login module 
  },
  {path: "in",  loadChildren: () => import("./logged-in/logged-in.module").then(m => m.LoggedInModule)},
  //Lazy loading for login module 
  {
    path: 'pay', component: PaymentComponent,
  },
  {
    path: 'movie', component: MovieComponent //Movie Component can be child of Home and Child activation as well
  },
  {path: 'about', component: AboutComponent},
  
  {path: '**', component:NotfoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
