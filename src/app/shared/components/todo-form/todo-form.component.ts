// Angular component-related imports
import { Component, OnInit, ViewChild } from '@angular/core';

// Template-driven form ke liye NgForm import
import { NgForm } from '@angular/forms';

// Apna custom service jo todo data handle karta hai
import { DataService } from '../../services/data.service';

// Unique ID generate karne ke liye custom service
import { UuidService } from '../../services/uuid.service';

// Interface ya model jisme user ke data ka structure defined hai
import { user } from '../../module/data';

// Snackbar service jo custom notification show karta hai (success/info)
import { CustomSnackbarService } from '../../services/custom-snackbar.service';

@Component({
  selector: 'app-todo',                              // Component ka selector (HTML me <app-todo>)
  templateUrl: './todo-form.component.html',         // HTML template file
  styleUrls: ['./todo-form.component.scss']          // CSS file for styling
})
export class TodoComponent implements OnInit {

  // Template-driven form ko access karne ke liye ViewChild use kiya gaya
  @ViewChild('todoForm') todoForm!: NgForm;

  // Input field ke liye property (2-way binding)
  todo: string = '';

  // Flag: agar edit mode hai to true, warna false
  isEditMode: boolean = false;

  // Editing ke time jis item ko edit kar rahe hain uska ID store karega
  editingId: string | null = null;

  // Constructor: services ko inject kiya gaya hai
  constructor(
    private todoData: DataService,                   // Data service jisme create/update ka logic hai
    private uuid: UuidService,                       // Service jo unique ID banata hai
    private snackabar: CustomSnackbarService         // Snackbar notifications ke liye
  ) {}

  // Component load hone ke baad run hota hai
  ngOnInit(): void {
    // ✅ Service se selectedUser$ ko subscribe karte hain (edit mode ke liye)
    this.todoData.selectedUser$.subscribe((user: user | null) => {
      if (user) {
        this.todo = user.name;                       // Input field me name show karne ke liye
        this.editingId = user.id;                    // Editing ke liye ID store
        this.isEditMode = true;                      // Edit mode enable
      }
    });
  }

  // ✅ Form submit hone par call hone wala method
  addTodo() {
    if (this.todoForm.valid) {                       // Agar form valid hai tabhi kaam kare
      const userObj: user = {
        name: this.todo,                             // Todo ka naam
        id: this.isEditMode ? this.editingId! : this.uuid.UID()  // ID agar edit mode me hai to same rahegi, warna naya banega
      };

      if (this.isEditMode) {
        this.todoData.updateObj(userObj);            // ✅ Existing item update karo
        this.snackabar.showInfo('Updated Successfully'); // Info snackbar
      } else {
        this.todoData.createObj(userObj);            // ✅ Naya item create karo
        this.snackabar.showSuccess('Created Successfully'); // Success snackbar
      }

      this.todoForm.resetForm();                     // ✅ Form ko reset karo (input clear)
      this.todo = '';                                // Variable clear
      this.isEditMode = false;                       // Edit mode hata do
      this.editingId = null;                         // ID clear
    }
  }
}
