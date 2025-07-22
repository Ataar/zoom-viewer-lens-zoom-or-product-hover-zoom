// Angular lifecycle aur component decorator import
import { Component, OnDestroy, OnInit } from '@angular/core';

// Apna data service jisme user-related logic hai
import { DataService } from '../../services/data.service';

// User model ya interface import (name, id ka structure)
import { user } from '../../module/data';

@Component({
  selector: 'app-todo-items',                        // Component ka selector (HTML me <app-todo-items>)
  templateUrl: './todo-items.component.html',        // Is component ka HTML template
  styleUrls: ['./todo-items.component.scss']         // CSS styling
})
export class TodoItemsComponent implements OnInit, OnDestroy {

  // Sabhi users ka array store hoga isme (jo loop me display hote hain)
  userData: Array<user> = [];

  // Constructor me DataService inject ki gayi hai
  constructor(private data: DataService) {}

  // ✅ Component load hone par user list ko fetch karo
  ngOnInit(): void {
    this.userData = this.data.getUsersData();        // DataService se user data lekar userData me store kiya
  }

  // ✅ Edit button par click hone par chalne wala method
  edit(id: string) {
    // ID ke basis par matching user object find karo
    const user = this.data.usersObjArr.find(add => add.id === id);

    if (user) {
      // Agar user mil gaya to use selected user bana do (edit form me bhejne ke liye)
      this.data.selectUser(user); // Observable me data emit karega
    }
  }

  // ✅ Delete button par click hone par chalne wala method
  onDelete(id: string) {
    this.data.onRemmove(id); // Service me defined method jo user ko hata dega
  }

  // ✅ Jab component destroy ho (navigate karein dusre route par), to clean-up karo
  ngOnDestroy(): void {
    this.data.clearSelectedUser(); // Edit mode clear karo (warna dusri jagah bhi edit mode active rahega)
  }
}
