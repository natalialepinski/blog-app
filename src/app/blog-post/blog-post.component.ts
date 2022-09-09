import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post.model';
import { PostService } from '../services/post/post.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  post_id: number;
  post: Post = <Post>{};

  constructor(private _route: ActivatedRoute, private service: PostService) {
    this.post_id = 0;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.post_id = params['id'];
    })
    this.service.getPost(this.post_id).subscribe((post: Post) => {
      this.post = post;
    });
  }
}
