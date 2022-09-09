import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'blog-app';

  constructor(private meta: Meta) { }

  ngOnInit() {
    this.meta.addTags([
      {name: 'description', content: 'LetsGetBlogger home page'},
      {name: 'author', content: 'Natalia Lepinski'},
      {name: 'keywords', content: 'blog, angular, typescript, letsgetblogger'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'}
    ])
  }
}
