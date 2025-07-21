import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { UuidService } from '../../services/uuid.service';
import { user } from '../../module/data';
import { CustomSnackbarService } from '../../services/custom-snackbar.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoComponent implements OnInit {

  @ViewChild('todoForm') todoForm!: NgForm;
  todo: string = '';
  isEditMode:boolean = false;
  editingId: string | null = null;

  constructor(
    private todoData: DataService,
    private uuid: UuidService,
    private snackabar :CustomSnackbarService
  ) {}

  ngOnInit(): void {
    // ✅ Subscribe to selected user from service
    this.todoData.selectedUser$.subscribe((user: user | null) => {
      if (user) {
        this.todo = user.name;
        this.editingId = user.id;
        this.isEditMode = true
      
      }
    });
  }
  
  addTodo() {
    if (this.todoForm.valid) {
      const userObj: user = {
        name: this.todo,
        id: this.isEditMode ? this.editingId! : this.uuid.UID()
      };

      if (this.isEditMode) {
        this.todoData.updateObj(userObj); // ✅ Update existing item
         this.snackabar.showInfo('Updated Successfully')
      } else {
        this.todoData.createObj(userObj); // ✅ Create new item
        this.snackabar.showSuccess('Created Successfully')
      }

      this.todoForm.resetForm(); // ✅ Reset form
      this.todo = '';
      this.isEditMode = false;
      this.editingId = null;
    }
  }
}
