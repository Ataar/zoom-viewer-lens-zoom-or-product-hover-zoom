import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Of2Service } from '../../services/of2.service';

@Component({
  selector: 'app-even-odd',
  templateUrl: './even-odd.component.html',
  styleUrls: ['./even-odd.component.scss']
})
export class EvenOddComponent implements OnInit , OnDestroy {
 
 data : number[]=[];

unSubscribe !: Subscription
  constructor(
   private f : Of2Service) { }
  ngOnInit(): void {
   
    this.unSubscribe = this.f.getNum().subscribe(res => {
  if (res % 2 === 0) {
    console.log('Even number received:', res);
    this.data.push(res);
  }
});


       

      

       console.log(this.data)
       
  }
  
  ngOnDestroy(): void {
    this.unSubscribe.unsubscribe()
  }
}