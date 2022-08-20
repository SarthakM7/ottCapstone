import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllServiceService } from 'src/app/all-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public sarv: AllServiceService, public router: Router) { }
  log: any;
  ngOnInit(): void {this.log =this.sarv.userLoggedinID;  
  //console.log(this.log)
}

  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any){
    //console.log($event);
    //console.log("scrolling");
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
        return;
    }
  if (window.scrollY === 0) {
    navbarCollapsible.classList.remove('navbar-shrink')
} else {
    navbarCollapsible.classList.add('navbar-shrink')
}
  } 
loggingOut(){
  this.sarv.userLoggedinID=undefined;  
}
}
