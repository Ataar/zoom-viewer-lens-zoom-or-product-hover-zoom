
import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Angular ko batata hai ki ye service root injector me available ho
})
export class OfService {

  // ✅ Best practice: Observable property ke naam ke end me $ lagate hain, jo indicate karta hai ki ye ek Observable hai
  onSubscribe$: Observable<number> = interval(10);  // interval(10) ek infinite observable emit karta hai har 10ms me

  constructor() { }

  // ✅ Observable return karne wala method
  getObj(): Observable<number> {
    return this.onSubscribe$;
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
