// ✅ Angular core imports
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

// ✅ Todo model (interface): todo object ka structure define karta hai
import { TodoItem } from '../../module/todo';

// ✅ Service file jahan todo logic manage hota hai
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-services', // ✅ Component ka selector
  templateUrl: './services.component.html', // ✅ HTML template file
  styleUrls: ['./services.component.scss'] // ✅ CSS file
})
export class ServicesComponent implements OnInit {

  // ✅ Todos ko store karne ke liye array
  todoData: Array<TodoItem> = [];

  // ✅ ViewChild se textarea ko directly access karte hain (focus karne ke liye)
  @ViewChild('descInput') descInputRef!: ElementRef;

  // ✅ Service inject ki gayi hai
  constructor(private todoService: TodoService) {}

  // ✅ Component load hone par todos fetch karo
  ngOnInit(): void {
    this.todoData = this.todoService.getTodos();
  }

  // ✅ Abhi kaunsa todo edit ho raha hai uska ID
  editingTodoId: number | null = null;

  // ✅ Jab edit start karein to purana description yaad rakhne ke liye
  originalDescription: string = '';

  // ✅ Edit mode activate karna
  onEdit(id: number) {
    this.editingTodoId = id; // ✅ Editing mode on

    // ✅ Selected todo item find karo
    const todo = this.todoData.find(t => t.id === id);
    if (todo) {
      this.originalDescription = todo.description; // ✅ Backup le lo
    }

    // ✅ DOM update hone ke baad hi textarea par focus karo
    setTimeout(() => {
      if (this.descInputRef) {
        this.descInputRef.nativeElement.focus(); // ✅ Focus cursor on textarea
      }
    }, 0);
  }

  // ✅ Save button par click hone par call hoga
  saveEdit() {
    if (this.editingTodoId !== null) {
      this.todoService.setTodos(this.todoData); // ✅ Changes ko localStorage me save karo
    }
    this.editingTodoId = null; // ✅ Edit mode off
  }

  // ✅ Cancel button par click hone par changes wapas original value pe aayenge
  cancelEdit() {
    const todo = this.todoData.find(t => t.id === this.editingTodoId);
    if (todo) {
      todo.description = this.originalDescription; // ✅ Revert changes
    }
    this.editingTodoId = null; // ✅ Edit mode off
  }
}
