import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Post } from "../../module/posts";
import { PostsService } from "../../services/posts.service";
import { UuidService } from "../../services/uuid.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

 
export class PostsComponent implements OnInit , OnDestroy {

 data:Array<Post>= []
unSubscribe!:Subscription
  postsService: any;


  constructor(
     private posts : PostsService,
    private uuid :UuidService) { }
 
    
//   ngOnInit(): void {
//   this.unSubscribe = this.posts.getAllObj().subscribe(res => {
//     this.data = res.map(post => ({
//       ...post,
//       data: this.uuid.uuid() // ✅ Add custom uuid to each post
//     }));

//     // console.log(this.data);

      
//   });
  
// }
  
ngOnInit(): void {
  if (this.posts.postsArray.length) {
    this.data = this.posts.postsArray; // ✅ Use cached data
  } else {
    this.unSubscribe = this.posts.getAllObj().subscribe(res => {
      this.data = res.map(post => ({
        ...post,
        id: this.uuid.uuid()  // ✅ Overwrite API id with custom UUID
      }));

      this.posts.postsArray = this.data; // ✅ Cache updated result
    });
  }
}
  
    ngOnDestroy(): void {
  if (this.unSubscribe) {
    this.unSubscribe.unsubscribe();
  }
}

}


