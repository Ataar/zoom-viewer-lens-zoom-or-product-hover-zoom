import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Of2Service } from '../../services/of2.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit ,OnDestroy {
  
 

 data : number[]=[];

unSubscribe !: Subscription
  constructor(
   private f : Of2Service) { }
  ngOnInit(): void {
   
      this.unSubscribe =  this.f.getNum().subscribe(res=>{
        if(res%2===1)
        {
          // console.log(res);
            this.data.push(res)
          }

       

      })

      //  console.log(this.data)
       
  }
  
  ngOnDestroy(): void {
    this.unSubscribe.unsubscribe()
  }
}