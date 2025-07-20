import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../module/data';
import { TodoService } from '../../services/data.service';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.scss']
})
export class TodoItemsComponent implements OnInit {
  todoItems:Array<TodoItem> = [];
   title!:string
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {

     this.todoItems = this.todoService.getTodos();

  }

 // todo-items.component.ts
edit(id: number) {
  const todo = this.todoService.todos.find(t => t.id === id);
  if (todo) {
    this.todoService.setSelectedTodo(todo); // ✅ this triggers the patch
  }
}



removeItem(id: number) {
  this.todoService.removeItem(id); // ✅ ID pass karo
}


}
