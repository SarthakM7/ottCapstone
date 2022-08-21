import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllServiceService } from './all-service.service';
import { LoginComponent } from './login/login/login.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [],
  providers: [AllServiceService,LoginComponent]
})
export class SharedModule {

}
