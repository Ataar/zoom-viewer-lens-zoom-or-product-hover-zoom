
import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../module/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

todoData : Array<TodoItem> = []
  constructor(
    private todoService : TodoService
  ) { }

 ngOnInit(): void {
  this.todoData = this.todoService.getTodos();
}




}



















// import { Component, OnInit } from '@angular/core';
// import { dataObjects } from '../../module/data';
// import { DataService } from '../../services/data.service';

// @Component({
//   selector: 'app-services',
//   templateUrl: './services.component.html',
//   styleUrls: ['./services.component.scss']
// })
// export class ServicesComponent implements OnInit {
//   // postService : DataService = new DataService()    // it is a instance of DataService

//  data02 :dataObjects[] = []
//   constructor(
//     private data : DataService
//   ) { }

//   ngOnInit(): void {
//    this.data02 = this.data.fetchData()
//   //  this.data02 = this.postService.fetchData()
//   }

//   sendPost()
//   {
//     this.data.createPost()
//   }

// }
