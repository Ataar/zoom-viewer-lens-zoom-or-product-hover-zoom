import { Injectable } from '@angular/core';
import { filter, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Of2Service {

  evenOdd$ = of(10,15,20,25,30,35,40,45,50)
   
  constructor() { }

   getNum01():Observable<number>
   {
    
    return this.evenOdd$.pipe(
      filter(num=>num % 2===0)
    )
   }
   
   getNum02():Observable<number>
   {
    
    return this.evenOdd$.pipe(
      filter(num=>num % 2===1)
    )
   }
}
