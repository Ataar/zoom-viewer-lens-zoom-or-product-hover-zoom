import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfService {

 onSubscribe$=interval(10)
   
      
  constructor(
    
  ) { }

   getObj():Observable<number>
   {
     return this.onSubscribe$
   }
}

   
 



















function getNum() {
  throw new Error('Function not implemented.');
}
// import { Injectable } from '@angular/core';
// import { filter, map, Observable, of } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class OfService {
//  of$:Observable<number> = of(10,20,30,43)
                         
//  of1$:Observable<number> = this.of$
//  .pipe(
//   filter(num=>{
//     return num % 2===0
//   })
// )

// of2$:Observable<string> = this.of$.pipe(
//   map((num)=>{
//     return `the value is ${num}`
//   })
// )

//   constructor() { }

// }
