import { Component, HostListener, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() {}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  };
 
  
    
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


