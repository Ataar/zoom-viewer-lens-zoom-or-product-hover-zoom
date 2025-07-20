




import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { dataObjects } from '../../module/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


data01:Array<dataObjects> = []
  constructor(private data:DataService) {}

  ngOnInit(): void {
   

       this.data01 = this.data.fetchData()

  }

  addPost()
  {
    // this.data.createPost()
  }
}
     
    
  



















// import { Component, OnInit } from '@angular/core';
// import { DataService } from '../../services/data.service';
// import { dataObjects } from '../../module/data';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })
// export class HomeComponent implements OnInit {

//   // dataService : DataService  = new DataService()

// data01:Array<dataObjects> = []
//   constructor(private data:DataService) {}

//   ngOnInit(): void {
   
//        this.data01 = this.data.fetchData()
//       //  this.data01 = this.dataService.fetchData()

//   }

//   addPost()
//   {
//     // this.dataService.createPost()
//     this.data.createPost()
//   }
// }
     
    
  
