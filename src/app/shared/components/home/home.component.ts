// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { interval, Subscription,  } from 'rxjs';
// import { OfService } from '../../services/of.service';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })


// export class HomeComponent implements OnInit , OnDestroy{
 
//    data : number[] = []
//  onSubscribe$ = interval(10)

//  unSubscribe !: Subscription;
   
//   constructor(
//     private _of : OfService
//   ) { }

    
 

//   ngOnInit(): void {
    
//      this.unSubscribe  = interval(10).subscribe(res=>{


//          this._of.getObj().subscribe()
//          this.data.push(res)
//         //  console.log(res);
          
//        })
//   }
//         ngOnDestroy(): void {

//        this.unSubscribe.unsubscribe()
//   }
  
          
// }
        

    

    
   import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OfService } from '../../services/of.service'; // ✅ Service import

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  // ✅ Array to hold numbers from Observable
  data: number[] = [];

  // ✅ Subscription type variable for managing and cleaning the subscription
  private unSubscribe!: Subscription;

  // ✅ Injecting service using Dependency Injection
  constructor(private _of: OfService) {}

  // ✅ Lifecycle hook - runs after component initializes
  ngOnInit(): void {
    // ❌ Aap yahan interval(10) dubara bana rahe the — galat approach
    // ✅ Sahi approach: service se observable use karo, bar bar interval(10) mat banao
    this.unSubscribe = this._of.getObj().subscribe(res => {
      this.data.push(res);  // ✅ Array me data push kar rahe hain
      // console.log(res);  // (Optional) Debug ke liye
    });
  }

  // ✅ Lifecycle hook - component destroy hone par subscription clean karo
  ngOnDestroy(): void {
    // ✅ Memory leak se bachne ke liye subscription close karna zaroori hai
    if (this.unSubscribe) {
      this.unSubscribe.unsubscribe();
    }
  }
}
























