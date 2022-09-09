import { PostComment } from './../models/post-comment.model';
import { PostCommentService } from './../services/post-comment/post-comment.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-blog-post-comment-form',
  templateUrl: './blog-post-comment-form.component.html',
  styleUrls: ['./blog-post-comment-form.component.scss']
})
export class BlogPostCommentFormComponent implements OnInit {
  @Input() post_id: number;
  @Input() parent_id?: number;
  @Output() newCommentAdd = new EventEmitter<boolean>();
  user: string;
  comment: string;
  name_invalid: boolean;
  comment_invalid: boolean;

  constructor(private service: PostCommentService) {
    this.post_id = 0;
    this.user = '';
    this.comment = '';
    this.name_invalid = false;
    this.comment_invalid = false;
  }

  ngOnInit() {
    this.post_id = Number(this.post_id);
  }

  addComment() {
    if (this.user == '') {
      this.name_invalid = true;
    } else {
      this.name_invalid = false;
    }
    if (this.comment == '') {
      this.comment_invalid = true;
    } else {
      this.comment_invalid = false;
    }

    if (this.user && this.comment) {
      const comment: PostComment = {postId: this.post_id, user: this.user, content: this.comment, parent_id: this.parent_id};
      this.service.addComment(comment).subscribe({
          next: () => console.log('New comment add'),
          error: (e) => console.error(e),
          complete: () => {
            this.newCommentAdd.emit(true);
            this.clearForm();
          }
        }
      );
    }
  }

  clearForm() {
    this.user = '';
    this.comment = '';
  }
}
