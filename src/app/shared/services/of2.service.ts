import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Of2Service {

  evenOdd$ = of(10,15,20,25,30,35,40,45,50)
   
  constructor() { }

   getNum():Observable<number>
   {
    
    return this.evenOdd$
   }
   
   
}
