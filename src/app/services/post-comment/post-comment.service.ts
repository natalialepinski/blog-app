import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostComment } from '../../models/post-comment.model';
import { DatePipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class PostCommentService {
  private url = 'http://localhost:3000/comments/';

  constructor(private httpClient: HttpClient, private datePipe: DatePipe) { }

  getCommentsPerPost(post_id: number) {
    return this.httpClient.get<PostComment[]>(this.url + '?postId=' + post_id);
  }

  addComment(comment: PostComment): Observable<PostComment> {
    this.addDate(comment);
    return this.httpClient.post<PostComment>(this.url, comment);
  }

  addDate(comment: any) {
    const todaysDate = new Date();
    comment.date = this.datePipe.transform(todaysDate, 'yyyy-MM-dd');
  }

}
