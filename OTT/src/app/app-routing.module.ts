import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login/<enter_login_component_name_here>', pathMatch: 'full'},
    {path: "in",  loadChildren: () => import("./logged-in/logged-in.module").then(m => m.LoggedInModule)
    //Lazy loading for logged in module has been done... 
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
