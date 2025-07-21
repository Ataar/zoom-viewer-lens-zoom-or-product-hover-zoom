import { Injectable } from '@angular/core';
import { user } from '../module/data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  usersObjArr: Array<user> = [
    { name: 'Rahul', id: '1' },
    { name: 'Priya', id: '2' },
    { name: 'Aman', id: '3' }
  ];

  private selectedUserSubject = new BehaviorSubject<user | null>(null);
  selectedUser$ = this.selectedUserSubject.asObservable();

  selectUser(user: user) {
    this.selectedUserSubject.next(user);
  }

  // ✅ Add this method
  clearSelectedUser() {
    this.selectedUserSubject.next(null);
  }

  getUsersData(): Array<user> {
    return this.usersObjArr;
  }

  createObj(todo: user) {
    this.usersObjArr.push(todo);
  }

  updateObj(todo: user) {
    const index = this.usersObjArr.findIndex(u => u.id === todo.id);
    if (index !== -1) {
      this.usersObjArr[index] = todo;
    }
  }

  onRemmove(id: string) {
    const removeObj = this.usersObjArr.findIndex(add => add.id === id);
    if (removeObj !== -1) {
      this.usersObjArr.splice(removeObj, 1);
    }
  }
}
