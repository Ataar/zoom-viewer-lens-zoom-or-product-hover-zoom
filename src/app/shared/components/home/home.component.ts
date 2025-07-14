import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription,  } from 'rxjs';
import { OfService } from '../../services/of.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit , OnDestroy{
 
   data : number[] = []
 onSubscribe$ = interval(10)

 unSubscribe !: Subscription;
   
  constructor(
    private _of : OfService
  ) { }

    
 

  ngOnInit(): void {
    
     this.unSubscribe  = interval(10).subscribe(res=>{


         this._of.getObj().subscribe()
         this.data.push(res)
        //  console.log(res);
          
       })
  }
        ngOnDestroy(): void {

       this.unSubscribe.unsubscribe()
  }
  
          
}
        

    

    
   



















// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { interval, Subscription,  } from 'rxjs';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })


// export class HomeComponent implements OnInit , OnDestroy{

//   onSubscribe$ = interval(10) // here interval is observable and that property in which observable is being stored
//   // put the $ doller symbol at last but you must assign observable also.

//    unSubscribe !: Subscription   
//   constructor() { }
 

//   ngOnInit(): void {
    
//      // hum jo bhi subscribtion lenge usko this.unSubscribe property me store karna hai.
//     this.unSubscribe = interval(10)
//      .subscribe(res=>{ 
//       console.log(res);
      
//      })
     
//     }
   
//     ngOnDestroy(): void {
   
//        this.unSubscribe.unsubscribe()
//   }
    
//   }
    





















