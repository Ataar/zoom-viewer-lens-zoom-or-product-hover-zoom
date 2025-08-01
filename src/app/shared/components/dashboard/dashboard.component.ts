// import { Component, OnInit, AfterViewInit, Renderer2, OnDestroy } from '@angular/core';


// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.scss']
// })
// export class DashboardComponent implements OnInit {
// isDarkMode = false;


// constructor() {}

// ngOnInit(): void {
// }

// toggleTheme() {
//   this.isDarkMode = !this.isDarkMode;
// }
// }


import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  isDarkMode = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // Optionally set default theme on init
    this.updateBodyClass();
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.updateBodyClass();
  }

  updateBodyClass(): void {
    const body = document.body;
    if (this.isDarkMode) {
      this.renderer.addClass(body, 'dark-mode');
      this.renderer.removeClass(body, 'light-mode');
    } else {
      this.renderer.addClass(body, 'light-mode');
      this.renderer.removeClass(body, 'dark-mode');
    }
  }

  ngOnDestroy(): void {
    // Clean up when component is destroyed
    this.renderer.removeClass(document.body, 'dark-mode');
    this.renderer.removeClass(document.body, 'light-mode');
  }
}


  



 
  


