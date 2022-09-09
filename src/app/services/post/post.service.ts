import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../../models/post.model';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://localhost:3000/posts/';

  constructor(private httpClient: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url);
  }

  getPost(id: number) {
    return this.httpClient.get<Post>(this.url + id);
  }

  // addPost(post: Post): Observable<Post> {
  //   this.addDate(post);
  //   return this.httpClient.post<Post>(this.url, post);
  // }

  // addDate(post: any) {
  //   post.date = new Date();
  // }

}
