import { Component, OnInit } from '@angular/core';
import { AllServiceService } from 'src/app/all-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public sarv:AllServiceService) { }

  ngOnInit(): void {
    this.makenow();
  }
  user:any=""
  fname:any= ""
  lname:any= ""
  acctype:any=""
  
  makenow()
  {


    this.sarv.getuser(2).subscribe(data => {
      this.user = JSON.parse(JSON.stringify(data));
    },
      error => {
        console.log("hererer")
        console.log(error);
      })
      this.fname=this.user.fname;
      this.lname=this.user.lname;
  }
}

