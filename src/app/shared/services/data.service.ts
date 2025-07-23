// Angular ka core module se Injectable decorator import kiya ja raha hai
import { Injectable } from '@angular/core';

// user naam ka interface ya class import kiya gaya hai jisme user ke properties (jaise name, id) defined hain
import { user } from '../module/data';

// RxJS se BehaviorSubject import kiya gaya hai, jo ek reactive data stream hota hai
import { BehaviorSubject } from 'rxjs';

// Ye decorator Angular ko batata hai ki ye class ek service hai jo dependency injection ke liye use hogi
@Injectable({
  providedIn: 'root'  // Iska matlab hai ki ye service pura app mein globally available hai
})
export class DataService {

  // Ye ek array hai jisme 3 user objects predefined hain
  usersObjArr: Array<user> = [
    // { name: 'Rahul', id: '1' },
    // { name: 'Priya', id: '2' },
    // { name: 'Aman', id: '3' }
  ];



  // Ye BehaviorSubject hai jo selected user ko store karta hai
  // Initially null hai (koi user select nahi hua)
  private selectedUserSubject = new BehaviorSubject<user | null>(null);

  // Ye observable banaya gaya hai taake doosre components is selected user ko subscribe kar sakein
  selectedUser$ = this.selectedUserSubject.asObservable();

  // Ye method kisi user ko select karne ke liye use hoti hai
  // selectedUserSubject ke andar naya user bhej diya jata hai
  selectUser(user: user) {
    this.selectedUserSubject.next(user);
  }

  

  // ✅ Ye method selected user ko clear (null) karne ke liye hai
  clearSelectedUser() {
    this.selectedUserSubject.next(null);  // koi user selected nahi hai ab
  }



  
  // Ye method ek naya user object array me add karta hai
  createObj(todo: user) {
    this.usersObjArr.push(todo);
    localStorage.setItem('todoArr',JSON.stringify(this.usersObjArr))
  }




  // Ye method poore users array ko return karta hai
 getUsersData(): Array<user> {
  
  // ✅ Step 1: Local Storage se 'todoArr' naam ka item uthate hain
  const data = localStorage.getItem('todoArr');

  // ✅ Step 2: Agar data mila (null nahi hai), to use JSON se parse karke usersObjArr me store karo
  if (data) {
    this.usersObjArr = JSON.parse(data); // String → Array of objects (user[])
  }

  // ✅ Step 3: usersObjArr ko return karo (jo component me use hoga)
  return this.usersObjArr;
}




  
  // Ye method existing user object ko update karta hai uske id ke basis par
  updateObj(todo: user) {
    // Pehle find kiya gaya ki user kis index pe hai
    const index = this.usersObjArr.findIndex(u => u.id === todo.id);
    if (index !== -1) {
      // Agar user mil gaya to us index pe naya user object set kar diya
      this.usersObjArr[index] = todo;
    localStorage.setItem('todoArr',JSON.stringify(this.usersObjArr))
         
    }
  }

  // Ye method user ko delete karta hai uske id ke basis pe
  onRemove(id: string) {
    // Array me find kiya gaya ki user kis index pe hai
    const removeObj = this.usersObjArr.findIndex(add => add.id === id);
    if (removeObj !== -1) {
      // Agar user mil gaya to splice karke usse remove kar diya
      this.usersObjArr.splice(removeObj, 1);
    localStorage.setItem('todoArr',JSON.stringify(this.usersObjArr))

    }
  }
}


