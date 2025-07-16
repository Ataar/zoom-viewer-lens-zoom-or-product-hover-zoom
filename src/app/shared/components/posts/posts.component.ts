import { Component, OnDestroy, OnInit } from "@angular/core";
import { PostsService } from "../../services/posts.service";
import { Subscription } from "rxjs";
import { Post } from "../../module/posts";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

 
export class PostsComponent implements OnInit , OnDestroy {
 data: Post[] = []
unSubscribe!:Subscription

  constructor(private _posts : PostsService) { }
 
  ngOnInit(): void {
    this.unSubscribe = this._posts.getAllObj().subscribe(res=>{
      // console.log(res);
      this.data = res
      console.log(this.data);

      
    })
  }
    
       
  
     ngOnDestroy(): void {
      if(this.data)
      {
        this.unSubscribe.unsubscribe()
      }
  }
}


