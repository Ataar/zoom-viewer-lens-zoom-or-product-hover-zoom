import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; // ✅ import environment
import { Post } from '../module/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postsArray: Post[] = [];

  private apiUrl = `${environment.apiUrl}/posts`; // ✅ use environment variable

  constructor(private http: HttpClient) {}

  getAllObj(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

   createPost(post: Post): Observable<Post> {
  return this.http.post<Post>(`${this.apiUrl}`, post);
}

// posts.service.ts
updatePost(id: string, post: Post): Observable<Post> {
  return this.http.put<Post>(`${this.apiUrl}/${id}`, post);
}


}
