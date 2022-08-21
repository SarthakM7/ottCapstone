import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AllServiceService } from '../all-service.service';

// import { UserPay } from '../total.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  title = 'ott';
  hide_cd: boolean = false;
  hide_nb: boolean = false;
  ID! :number;
  // user: UserPay = {cn:0, cvv:0, name:""}
  public payForm! : FormGroup;
  constructor(private allServices: AllServiceService) { }

  ngOnInit(): void {
    this.payForm = new FormGroup
    ({
      cn: new FormControl('', [Validators.required,this.validatecn]),
      cvv: new FormControl('', [Validators.required,this.validatecvv]),
      name: new FormControl('', [Validators.required,this.validatename]),
      ed: new FormControl('', [Validators.required,this.validatename]),
      accType: new FormControl('0')
    });
  }
    
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
      const reCvv = /^[0-9]+$/

      // console.log(this.reCn.test(control.value.toString()));
      if(control.value.toString().length!=3 || !reCvv.test(control.value.toString()) )
      {
        return {invalid: true};
      }
      else
      return null;
      
    }

    validatename(control:AbstractControl):ValidationErrors | null{
      // const reCn = /^[A-Za-z0-9]+$/
      const reName = /^[A-Za-z\s]+$/
      // console.log(this.reCn.test(control.value.toString()));
      if( !reName.test(control.value.toString()) )
      {
        return {invalid: true};
      }
      else
      return null;
    }

    public UpdateUser(): void{
      this.payForm.value.accType=1;
      this.allServices.updateUser(this.payForm.value,this.ID).subscribe(
        data => {
          alert("Data updated successfully")
          console.log(this.payForm.value);
          this.payForm.reset();
        },
        (error: HttpErrorResponse)=>{
          alert(error.message);
          this.payForm.reset();
        }
      )
    }
}
