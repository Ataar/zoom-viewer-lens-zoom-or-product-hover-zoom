// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-todo-items',
//   templateUrl: './todo-items.component.html',
//   styleUrls: ['./todo-items.component.scss']
// })
// export class TodoItemsComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
// src/app/components/todo-items/todo-items.component.ts

import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../../services/todo-service.service';
import { todoArr } from '../../module/todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.scss']
})
export class TodoItemsComponent implements OnInit {
  todoData: todoArr[] = [];

  constructor(private todoService: TodoServiceService) {}

  ngOnInit(): void {
    this.todoData = this.todoService.getTodos();
  }
}
