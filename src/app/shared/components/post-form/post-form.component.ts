import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @ViewChild('postForm') postForm !:NgForm;
  constructor( private data : DataService) { }

  ngOnInit(): void {
  }

   addPost()
   {
      if(this.postForm.valid)
      {
        let newObjs  = this.postForm.value;
        console.log(newObjs);
        this.data.createPost(newObjs)
        
      }
   }
}
