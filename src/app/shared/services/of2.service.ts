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






// import { of } from 'rxjs';
// import { filter, map } from 'rxjs/operators';

// // Step 1: Create the observable
// const evenOdd$ = of(10, 15, 20, 25, 30, 35, 40, 45, 50).pipe(
//   filter(num => num % 2 === 0),      // ✅ Keep only even numbers
//   map(num => num * 10)               // ✅ Multiply each by 10
// );

// // Step 2: Subscribe to get the result
// evenOdd$.subscribe(result => console.log(result));
