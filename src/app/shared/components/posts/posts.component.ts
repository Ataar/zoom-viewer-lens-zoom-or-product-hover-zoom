// ✅ Angular core features import kiye gaye hain
import { Component, OnDestroy, OnInit } from "@angular/core";

// ✅ Observable ko unsubscribe karne ke liye Subscription import kiya
import { Subscription } from "rxjs";

// ✅ Post model import — define karta hai ek post object ka structure
import { Post } from "../../module/posts";

// ✅ Service for handling all post operations (get, delete, etc.)
import { PostsService } from "../../services/posts.service";

// ✅ Service for generating unique IDs
import { UuidService } from "../../services/uuid.service";

// ✅ Angular Material Dialog components — dialogs create & configure karne ke liye
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

// ✅ Dialog component jo delete se pehle confirmation dikhata hai
import { ConfirmDialogComponent } from "../confirm-dialog/confirm-dialog.component";
import { CustomSnackbarService } from "../../services/custom-snackbar.service";

@Component({
  selector: 'app-posts',                    // ✅ Component ka HTML tag
  templateUrl: './posts.component.html',    // ✅ Template file
  styleUrls: ['./posts.component.scss']     // ✅ CSS file
})
export class PostsComponent implements OnInit, OnDestroy {
  
  // ✅ Array to hold post data
  data: Array<Post> = [];

  // ✅ Currently editing post ko hold karega
  currentEditPost!: Post;

  // ✅ Observable subscription — use to unsubscribe later
  unSubscribe!: Subscription;

  constructor(
    private posts: PostsService,   // ✅ Injecting Post service
    private uuid: UuidService,     // ✅ Injecting UUID service
    private dialog: MatDialog ,    // ✅ Injecting Material Dialog service
    private snackbar: CustomSnackbarService
  ) {}

  // ✅ Lifecycle method — runs on component load
  ngOnInit(): void {
    // ✅ Agar service me pehle se posts hai to unhe directly assign karo
    if (this.posts.postsArray.length) {
      this.data = this.posts.postsArray;
    } else {
      // ✅ Agar nahi hai to backend/API se data fetch karo
      this.unSubscribe = this.posts.getAllObj().subscribe(res => {
        // ✅ Har post me ek unique id add karo
        this.data = res.map(post => ({
          ...post,                   // ✅ Spread original post fields
          id: this.uuid.uuid()       // ✅ Generate and add unique id
        }));

        // ✅ Service ke postsArray me bhi data store karo (for caching)
        this.posts.postsArray = this.data;
      });
    }
  }

  // ✅ Method: Post delete karne se pehle confirmation dialog dikhata hai
  onDelet(id: string): void {
    const dailogConfig = new MatDialogConfig();    // ✅ Dialog config object banaya

    dailogConfig.data = `Wow! , ${'\u00A0'}Are You Sure?`; // ✅ Dialog me message bhejna
    dailogConfig.disableClose = true;              // ✅ Dialog ko backdrop click ya ESC se close na hone dena
    
    // ✅ Confirmation dialog open karo
    const dialogRef = this.dialog.open(ConfirmDialogComponent, dailogConfig);
    
    // ✅ Dialog band hone ke baad result milta hai (true ya false)
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result === true) {
        // ✅ Agar user ne confirm kiya to delete karo
        this.posts.ondelet(id).subscribe(res => {
          this.snackbar.showError('Deleted Successfully')
          console.log('Deleted:', res); // ✅ Console me response print karo
          
          // ✅ Deleted post ko data array se remove karo
          this.data = this.data.filter(post => post.id !== id);
          

          // ✅ Service ke postsArray ko bhi update karo
          this.posts.postsArray = this.data;
        });
      }
      else {
      // ✅ Show cancel message here
      this.snackbar.showCancel('Action is Cancelled');
    }


        
        

      
    });

    
  }



  // ✅ Lifecycle method: Component destroy hone pe subscription clean up
  ngOnDestroy(): void {
    if (this.unSubscribe) {
      this.unSubscribe.unsubscribe();  // ✅ Memory leak avoid karne ke liye unsubscribe
    }
  }
}
