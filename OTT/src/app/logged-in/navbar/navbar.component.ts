import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

}
