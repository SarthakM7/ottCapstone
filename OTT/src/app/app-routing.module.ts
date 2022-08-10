import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
//  { path: '', redirectTo: 'login/LoginComponent', pathMatch: 'full'},
    {path: "Auth",  loadChildren: () => import("./login/login.module").then(m => m.LoginModule)
    //Lazy loading for login module 
  },
  {path: "in",  loadChildren: () => import("./logged-in/logged-in.module").then(m => m.LoggedInModule)},
  //Lazy loading for login module 
  {
    path: 'pay', component: PaymentComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
