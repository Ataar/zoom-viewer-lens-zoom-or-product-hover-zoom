import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { user } from '../../module/data';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.scss']
})
export class TodoItemsComponent implements OnInit, OnDestroy {

  userData: Array<user> = [];

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.userData = this.data.getUsersData();
  }

  edit(id: string) {
    const user = this.data.usersObjArr.find(add => add.id === id);
    if (user) {
      this.data.selectUser(user);
    }
  }

  onDelete(id: string) {
    this.data.onRemmove(id);
  }

  // ✅ Proper ngOnDestroy implementation
  ngOnDestroy(): void {
    this.data.clearSelectedUser(); // Clear edit mode state when navigating away
  }
}
