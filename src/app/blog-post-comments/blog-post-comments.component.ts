import { Component, Input, OnInit } from '@angular/core';
import { PostComment } from '../models/post-comment.model';
import { PostCommentService } from '../services/post-comment/post-comment.service';

@Component({
  selector: 'app-blog-post-comments',
  templateUrl: './blog-post-comments.component.html',
  styleUrls: ['./blog-post-comments.component.scss']
})
export class BlogPostCommentsComponent implements OnInit {
  @Input() post_id: number;
  post_comments: PostComment[] = [];
  replies: PostComment[] = [];

  constructor(private service: PostCommentService) {
    this.post_id = 0;
   }

  ngOnInit(): void {
    this.service.getCommentsPerPost(this.post_id).subscribe((post_comments: PostComment[]) => {
      this.post_comments = post_comments.filter(comment => comment.parent_id == null);
      this.replies = post_comments.filter(comment => comment.parent_id !== null);
    });
  }

  newCommentAdd(has_new_comment: boolean) {
    if (has_new_comment) {
      this.ngOnInit();
    }
  }
}
