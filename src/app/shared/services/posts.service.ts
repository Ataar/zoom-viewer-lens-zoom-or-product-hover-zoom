import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; // ✅ import environment
import { Post } from '../module/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private apiUrl = `${environment.apiUrl}/posts`; // ✅ use environment variable

  constructor(private http: HttpClient) {}

  getAllObj(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }
}
