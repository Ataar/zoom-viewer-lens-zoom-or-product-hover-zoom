import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Post } from "../../module/posts";
import { PostsService } from "../../services/posts.service";
import { UuidService } from "../../services/uuid.service";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ConfirmDialogComponent } from "../confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {

  data: Array<Post> = [];
  currentEditPost!: Post;
  unSubscribe!: Subscription;

  constructor(
    private posts: PostsService,
    private uuid: UuidService,
    private dialog: MatDialog  // ✅ Inject MatDialog
  ) {}

  ngOnInit(): void {
    if (this.posts.postsArray.length) {
      this.data = this.posts.postsArray;
    } else {
      this.unSubscribe = this.posts.getAllObj().subscribe(res => {
        this.data = res.map(post => ({
          ...post,
          id: this.uuid.uuid()
        }));
        this.posts.postsArray = this.data;
      });
    }
  }

  // ✅ Show confirmation dialog before deletion
  onDelet(id: string): void {
    const dailogConfig = new MatDialogConfig();
    dailogConfig.data =  `Wow! , ${'\u00A0'}Are You Sure?`,
    dailogConfig.disableClose = true
    // panelClass: 'custom-dialog-container'

    const dialogRef = this.dialog.open(ConfirmDialogComponent, dailogConfig)

     dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result === true) {
        // ✅ Only delete if user confirms
        this.posts.ondelet(id).subscribe(res => {
          console.log('Deleted:', res);

          // ✅ Update local list after deletion
          this.data = this.data.filter(post => post.id !== id);
          this.posts.postsArray = this.data;
        });
      }
    });
  }

  ngOnDestroy(): void {
    if (this.unSubscribe) {
      this.unSubscribe.unsubscribe();
    }
  }
}
