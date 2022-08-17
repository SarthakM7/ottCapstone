import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() {
    window.addEventListener('DOMContentLoaded', event => {
    // Navbar shrink function
    function navbarShrink() {
      const navbarCollapsible = document.body.querySelector('#mainNav');
      if (!navbarCollapsible) {
          return;
      }
      if (window.scrollY === 0) {
          navbarCollapsible.classList.remove('navbar-shrink')
      } else {
          navbarCollapsible.classList.add('navbar-shrink')
      }
     // Shrink the navbar
      navbarShrink();
      // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);
     // Activate Bootstrap scrollspy on the main nav element
     const mainNav = document.body.querySelector('#mainNav');
    //  if (mainNav) {
    //      new bootstrapApplication.ScrollSpy(document.body, {
    //          target: '#mainNav',
    //          offset: 74,
    //      });
    //  };
  }
   });
  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  };

  
    
    
     
    
    
    
    
   
    
    }


