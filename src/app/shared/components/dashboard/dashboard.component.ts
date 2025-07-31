import { Component, OnInit, AfterViewInit, Renderer2, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
isDarkMode = false;


constructor() {}

ngOnInit(): void {
}

toggleTheme() {
  this.isDarkMode = !this.isDarkMode;
}
}

  



 
  


