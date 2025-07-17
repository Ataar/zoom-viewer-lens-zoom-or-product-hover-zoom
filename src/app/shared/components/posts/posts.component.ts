// ✅ Required imports for component logic
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Post } from "../../module/posts";              // Post model
import { PostsService } from "../../services/posts.service"; // Service for data fetching
import { UuidService } from "../../services/uuid.service";   // Service for UUID generation
import { Router } from "@angular/router";
@Component({
  selector: 'app-posts',                        // HTML selector for this component
  templateUrl: './posts.component.html',        // HTML file
  styleUrls: ['./posts.component.scss']         // CSS file
})
export class PostsComponent implements OnInit, OnDestroy {

  // ✅ Posts data ko is array me store karenge
  data: Array<Post> = [];

  // ✅ Agar koi post edit karna ho to usko temporarily yahan store karenge
  currentEditPost!: Post;

  // ✅ API subscription ko track karne ke liye
  unSubscribe!: Subscription;

  // ✅ Constructor me services inject ki ja rahi hain
  constructor(
    private posts: PostsService,     // Posts service
    private uuid: UuidService,   // UUID service
    private router:Router ,      
  ) {}

  // ✅ Component initialize hote hi data fetch karna
  ngOnInit(): void {

    // ✅ Agar postsArray me pehle se data hai (cached), to usi ko use karo
    if (this.posts.postsArray.length) {
      this.data = this.posts.postsArray;
    } 

    
    // ✅ Agar cached data nahi hai to API se data fetch karo
    else {
      this.unSubscribe = this.posts.getAllObj().subscribe(res => {
        // ✅ Har post ke sath ek custom UUID add karo (original ID overwrite karke)
        this.data = res.map(post => ({
          ...post,
          id: this.uuid.uuid()
        }));

        // ✅ Fetched data ko service ke array me store karo (for caching)
        this.posts.postsArray = this.data;
      });
    }
  }
  
      onDelet(id:string)
  
      {
           this.posts.ondelet(id).subscribe(res=>{
            console.log(res);
            
           })
      }
  
  // ✅ Jab component destroy ho (page leave kare), to subscription close karo
  ngOnDestroy(): void {
    if (this.unSubscribe) {
      this.unSubscribe.unsubscribe();
    }
  }
}

  

