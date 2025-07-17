// ✅ Required Angular and project-specific imports
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../module/posts'; // Post model import
import { PostsService } from '../../services/posts.service'; // Service for API/local data handling
import { UuidService } from '../../services/uuid.service'; // Service to generate UUIDs

@Component({
  selector: 'app-post-form', // Is component ka HTML selector
  templateUrl: './post-form.component.html', // Is component ka HTML template
  styleUrls: ['./post-form.component.scss'], // Styling file
})
export class PostFormComponent implements OnInit {

  // 👇 Yeh flag batata hai ke hum edit kar rahe hain ya naye post bana rahe hain
  isEditMode: boolean = false;

  // 👇 Yeh current post ki ID store karega (chahe number ho ya UUID)
  postId!: string;

  // 👇 Agar edit kar rahe hain to yeh post object us post ka data store karega
  postToEdit!: Post;

  // 👇 Template Reference (form) ko yahan capture kiya gaya hai for validation, reset, etc.
  @ViewChild('postForm') postForm!: NgForm;

  // ✅ Constructor ke andar services inject ki ja rahi hain
  constructor(
    private postService: PostsService,      // Service for post operations
    private route: ActivatedRoute,          // Current route se ID fetch karne ke liye
    private router: Router,                 // Navigate karne ke liye
    private uuid: UuidService               // UUID generate karne ke liye
  ) {}

  // ✅ Component initialization lifecycle hook
  ngOnInit(): void {
    // Route se postId nikalna (e.g., /posts/edit/5 → "5")
    this.postId = this.route.snapshot.params['userId'];
    console.log(' userId from route:', this.postId);

    // Agar postId mil gaya to iska matlab edit mode hai
    if (this.postId) {
      this.isEditMode = true;

      // postsArray me se woh post find karo jiska id match karta ho
      const foundPost = this.postService.postsArray.find(post => post.id === this.postId);

      // Agar post mil gaya to usko postToEdit me store karo
      if (foundPost) {
        this.postToEdit = foundPost;

        // Form me values patch karo (asynchronously — isliye setTimeout)
        setTimeout(() => {
          this.postForm.form.patchValue({
            title: this.postToEdit.title,
            body: this.postToEdit.body,
          });
        });
      }
    }
  }

  // ✅ Jab form submit ho
  onSubmit(): void {
    if (this.postForm.valid) {
      const formValue = this.postForm.value; // Form ki current values nikal lo

      // ------------------------ Edit Mode ------------------------
      if (this.isEditMode) {

        // Purane post object me naye title/body update karo
        const updatedPost: Post = {
          ...this.postToEdit,              // baaki fields ko waisa ka waisa rakhna
          title: formValue.title,         // title update
          body: formValue.body            // body update
        };

        // ✅ Agar ID number hai (1-100 range me) to JSONPlaceholder API pe update karo
        if (!isNaN(+this.postId)) {
          this.postService.updatePost(this.postId, updatedPost).subscribe(() => {

            // Local array me bhi update karo
            const index = this.postService.postsArray.findIndex(p => p.id === this.postId);
            if (index !== -1) {
              this.postService.postsArray[index] = updatedPost;
            }

            // Posts list page pe wapas le jao
            this.router.navigate(['/posts']);
          });

        } else {
          // ⚠️ Agar UUID hai (local post), sirf array update karo (API call mat karo)
          const index = this.postService.postsArray.findIndex(p => p.id === this.postId);
          if (index !== -1) {
            this.postService.postsArray[index] = updatedPost;
          }

          this.router.navigate(['/posts']);
        }

      } 
      
      // ------------------------ Create Mode ------------------------
      else {
        // ✅ Naya post object banao (with UUID)
        const newPost: Post = {
          ...formValue,         // title + body
          id: this.uuid.uuid(), // Naya UUID generate karo
          userId: 1             // Default userId
        };

        // API call karke post create karo
        this.postService.createPost(newPost).subscribe(() => {

          // Local array me naye post ko add karo (start me)
          this.postService.postsArray.unshift(newPost);

          // Form reset karo
          this.postForm.reset();

          // Navigate to posts page
          this.router.navigate(['/posts']);
        });
      }
    }
  }

   

}
