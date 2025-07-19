// import { Component, OnInit } from '@angular/core';
// import { DataService } from '../../services/data.service';
// import { dataObjects } from '../../module/data';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })
// export class HomeComponent implements OnInit {

// data01:Array<dataObjects> = []
//   constructor(private data:DataService) {}

//   ngOnInit(): void {
//     this.data01 = this.data.fetchData();
    
//   }
// }
     
   // src/app/home/home.component.ts
import { Component, HostListener, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { dataObjects } from '../../module/data';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allPosts: dataObjects[] = [];
  loading = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadMorePosts();
  }

  loadMorePosts() {
    this.loading = true;
    setTimeout(() => {
      const newPosts = this.dataService.generatePosts(10);
      this.allPosts = [...this.allPosts, ...newPosts];
      this.loading = false;
    }, 800); // simulate API delay
  }

  // 🔁 Detect scroll to bottom
  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight + 100 >= docHeight && !this.loading) {
      this.loadMorePosts();
    }
  }
}
 
  
