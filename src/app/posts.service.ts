import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/interfaces/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  url = 'https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/post';
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }

  getPost(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.url}/${id}`);
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.url, post);
  }
}
