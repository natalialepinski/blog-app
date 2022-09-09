import { Component, Input, OnInit } from '@angular/core';
import { PostComment } from 'src/app/models/post-comment.model';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-blog-post-comment',
  templateUrl: './blog-post-comment.component.html',
  styleUrls: ['./blog-post-comment.component.scss']
})
export class BlogPostCommentComponent implements OnInit {
  @Input() comment: PostComment = <PostComment>{};
  @Input() has_reply: boolean;
  @Output() hasNewReply = new EventEmitter<boolean>();
  show_form: boolean;
  index: number;

  constructor() {
    this.has_reply = false;
    this.show_form = false;
    this.index = 0;
   }

  ngOnInit(): void {
  }

  replyComment(index: number) {
    this.show_form = true;
    this.index = index;
  }

  addNewReply(has_new_reply: boolean) {
    this.hasNewReply.emit(has_new_reply);
  }
}
