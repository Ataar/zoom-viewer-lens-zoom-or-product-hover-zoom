import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../../module/posts';
import { PostsService } from '../../services/posts.service';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent {
  isEditMode:boolean = false
  @ViewChild('postForm') postForm!: NgForm;

  constructor(
    private postService: PostsService,
    private uuidService: UuidService,
    private router: Router
  ) {}

onSubmit() {
  if (this.postForm.valid) {
    // console.log(this.postForm);
    
    const newPost: Post = {...this.postForm.value, id: this.uuidService.uuid()
    };
     console.log(newPost);
     
    this.postService.createPost(newPost).subscribe(() => {
    this.postService.postsArray.unshift(newPost); // ✅ Add to shared array
    this.postForm.reset();
    this.router.navigate(['/posts']); // ✅ Redirect
  });
    // this.postService.createPost(newPost).subscribe(() => {
    //   this.postService.postsArray.unshift(newPost);
    //   console.log(newPost);
    //    // ✅ Fixed here
    //   this.postForm.reset();
    //   this.router.navigate(['/posts']);
    // });
  }


}
}


