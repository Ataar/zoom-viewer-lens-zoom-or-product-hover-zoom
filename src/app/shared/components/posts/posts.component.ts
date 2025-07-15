import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Of2Service } from "../../services/of2.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

 
export class PostsComponent implements OnInit, OnDestroy {
  
  data : number[]=[];

unSubscribe !: Subscription
  constructor(
   private f : Of2Service) { }
  ngOnInit(): void {
   
      this.unSubscribe =  this.f.getNum01().subscribe(res=>{
        // if(res % 2===0)
        // {
        //   // console.log(res);
        //     this.data.push(res)
        //   }
        this.data.push(res)


      })

       console.log(this.data)
       
  }
  
  ngOnDestroy(): void {
    this.unSubscribe.unsubscribe()
  }
}


let a = [1,2]