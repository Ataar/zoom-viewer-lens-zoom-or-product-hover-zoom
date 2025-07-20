
import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoService } from '../../services/data.service';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';
import { TodoItem } from '../../module/data';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoComponent implements OnInit {
  title:string ='';
  isEditMode : boolean = false
selectedId: number | null = null;
   @ViewChild('todoForm') todoForm!: NgForm

  constructor(private data : TodoService,
     private _UUi: UuidService    
  ) {}

  ngOnInit(): void {
    this.data.selectedTodo$.subscribe(todo => {
      console.log('Updating ID:', this.selectedId); // ✅ Ye sahi ID print kare

     this.data.selectedTodo$.subscribe(todo => {
  if (todo) {
    this.title = todo.title;        // ✅ ye form ke input me show karega
    this.selectedId = todo.id;
    this.isEditMode = true;
  }
    
    }
    )}
  )}


  addTodo() {
  if (this.todoForm.valid) {
    if (this.isEditMode && this.selectedId !== null) {
  this.data.updateItem(this.selectedId, {
    title: this.title
  });
}
 else {
      const newTodo: TodoItem = {
        id: +this._UUi.uuid(),
        title: this.title,
        description: '',
        imageUrl: '',
        completed: false,
        createdAt: new Date
      };
      this.data.createItem(newTodo);
    }

    // reset
    this.todoForm.resetForm();
    this.title = '';
    this.selectedId = null;
    this.isEditMode = false;
  }
}

}


