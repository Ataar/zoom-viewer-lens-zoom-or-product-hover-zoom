
// 📦 Import core Angular functionality
import { Component, OnInit } from '@angular/core';

// 📦 Import the custom Todo service to fetch todo data
import { TodoServiceService } from '../../services/todo-service.service';

// 📦 Import the Todo array type or interface
import { todoArr } from '../../module/todo';

// 🧩 Component decorator to define selector, template, and styles
@Component({
  selector: 'app-todo-items',                  // 🔹 Custom HTML tag used for this component
  templateUrl: './todo-items.component.html',  // 🔹 HTML template for this component
  styleUrls: ['./todo-items.component.scss']   // 🔹 SCSS styling specific to this component
})
export class TodoItemsComponent implements OnInit {

  // 📌 Array to store todo items retrieved from the service
  todoData: todoArr[] = [];

  // 🔧 Injecting the Todo service using Angular's dependency injection
  constructor(private todoService: TodoServiceService) {}

  // 🚀 Lifecycle hook called once the component is initialized
  ngOnInit(): void {
    // 📥 Fetch todos from the service and store in `todoData`
    this.todoData = this.todoService.getTodos();
  }
}








// import { Component, OnInit } from '@angular/core';
// import { TodoServiceService } from '../../services/todo-service.service';
// import { todoArr } from '../../module/todo';

// @Component({
//   selector: 'app-todo-items',
//   templateUrl: './todo-items.component.html',
//   styleUrls: ['./todo-items.component.scss']
// })
// export class TodoItemsComponent implements OnInit {
//   todoData: todoArr[] = [];

//   constructor(private todoService: TodoServiceService) {}

//   ngOnInit(): void {
//     this.todoData = this.todoService.getTodos();
//   }
// }
