import { PostService } from './../services/post/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-blog-feed',
  templateUrl: './blog-feed.component.html',
  styleUrls: ['./blog-feed.component.scss']
})
export class BlogFeedComponent implements OnInit {
  posts: Post[] = [];

  constructor(private service: PostService) {
    this.posts = [];
  }

  ngOnInit(): void {
    this.service.getAllPosts().subscribe((posts: Post[]) => {
      const posts_sorted = posts.sort((a, b) => new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime());
      this.posts = posts_sorted;
    });
  }
}
