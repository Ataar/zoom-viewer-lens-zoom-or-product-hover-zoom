import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { user } from '../../module/data';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.scss']
})
export class TodoItemsComponent implements OnInit {
 
  userData :Array<user> = []
  constructor(
    private data : DataService,
   
  ) { }

  ngOnInit(): void {

    this.userData  = this.data.getUsersData()
  }


  edit(id:string)
  {
     const user = this.data.usersObjArr.find(add=>add.id===id)
     console.log(user);
     
     if(user)
     {
      this.data.selectUser(user)
     }
  }

  onDelete(id:string)
  {
    this.data.onRemmove(id)
  }



}
