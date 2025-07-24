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

editingTodoId: number | null = null;
originalDescription: string = '';

onEdit(id: number) {
  this.editingTodoId = id;

  // Backup the original description
  const todo = this.todoData.find(t => t.id === id);
  if (todo) {
    this.originalDescription = todo.description;
  }
   
}

saveEdit() {
  if (this.editingTodoId !== null) {
    this.todoService.setTodos(this.todoData); // ✅ Update localStorage via service
  }
  this.editingTodoId = null;
}


cancelEdit() {
  const todo = this.todoData.find(t => t.id === this.editingTodoId);
  if (todo) {
    todo.description = this.originalDescription;
  }
  this.editingTodoId = null;
}



}

















// #####################################################################################################



// import { Component, OnInit } from '@angular/core';
// import { TodoItem } from '../../module/todo';
// import { TodoService } from '../../services/todo.service';

// @Component({
//   selector: 'app-services',
//   templateUrl: './services.component.html',
//   styleUrls: ['./services.component.scss']
// })
// export class ServicesComponent implements OnInit {

// todoData : Array<TodoItem> = []
//   constructor(
//     private todoService : TodoService
//   ) { }

//  ngOnInit(): void {
//   this.todoData = this.todoService.getTodos();
// }

// }


// ###################################################################################################





















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
