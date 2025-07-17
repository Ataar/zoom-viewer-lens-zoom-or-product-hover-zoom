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


  // getProduct(id: string): Post {
  //   // API call to get a product using pid = id(parameter)
  //   return this.postsArray.find((prod) => prod.id === id)!;
  // }


updatePost(id: string, post: Post): Observable<Post> {
  return this.http.put<Post>(`${this.apiUrl}/${id}`, post);
}

// ondelet(id :string):Observable<Post>
// {
//   let index = this.postsArray.findIndex(id=>id===id)
  
//   let getindex = this.postsArray.splice(index , 1)
//   console.log(getindex);
  
  
//   return this.http.delete<Post>(`${this.apiUrl}/${index}`)
// }
ondelet(id: string): Observable<Post> {
  // ✅ 1. Correctly find index using the actual post object property
  let index = this.postsArray.findIndex(post => post.id === id);

  // ✅ 2. If found, remove the post from the local array
  if (index !== -1) {
    const removedPost = this.postsArray.splice(index, 1); // removes 1 item at found index
    console.log('Removed from local array:', removedPost[0]);
  }

  // ✅ 3. Perform HTTP DELETE request using the actual post ID (not index)
  return this.http.delete<Post>(`${this.apiUrl}/${id}`);
}

}


