import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

import { UserPay } from '../total.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  title = 'ott';
  // user: UserPay = {cn:0, cvv:0, name:""}

  constructor() { }

  ngOnInit(): void {
  }
  payForm = new FormGroup
    ({
      cn: new FormControl('', [Validators.required,this.validatecn]),
      cvv: new FormControl('', [Validators.required,this.validatecvv]),
      name: new FormControl('', [Validators.required,this.validatename]),
      ed: new FormControl('', [Validators.required,this.validatename])
    });

    
    
    validatecn(control:AbstractControl):ValidationErrors | null{
      // const reCn = /^[A-Za-z0-9]+$/
      const reCn = /^[0-9]+$/

      // console.log(this.reCn.test(control.value.toString()));
      if(control.value.toString().length!=8 || !reCn.test(control.value.toString()) )
      {
        return {invalid: true};
      }
      else
      return null;
      
    }

    validatecvv(control:AbstractControl):ValidationErrors | null{
      // const reCn = /^[0-9]+$/
      const reCn = /^[0-9]+$/

      // console.log(this.reCn.test(control.value.toString()));
      if(control.value.toString().length!=3 || !reCn.test(control.value.toString()) )
      {
        return {invalid: true};
      }
      else
      return null;
      
    }

    validatename(control:AbstractControl):ValidationErrors | null{
      // const reCn = /^[A-Za-z0-9]+$/
      const reCn = /^[A-Za-z\s]+$/
      // console.log(this.reCn.test(control.value.toString()));
      if( !reCn.test(control.value.toString()) )
      {
        return {invalid: true};
      }
      else
      return null;
    }
}
