import { BlogPostCommentComponent } from './blog-post-comment/blog-post-comment.component';
import { BlogPostCommentsComponent } from './blog-post-comments/blog-post-comments.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogFeedComponent } from './blog-feed/blog-feed.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DatePipe, registerLocaleData } from '@angular/common';
import localeEnIE from '@angular/common/locales/en-IE'
import { FormsModule } from '@angular/forms';
import { BlogPostCommentFormComponent } from './blog-post-comment-form/blog-post-comment-form.component';
import { FooterComponent } from './footer/footer.component';

registerLocaleData(localeEnIE, 'en-ie');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogFeedComponent,
    BlogPostComponent,
    BlogPostCommentsComponent,
    BlogPostCommentComponent,
    BlogPostCommentFormComponent,
    FooterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    DatePipe,
    {provide: LOCALE_ID, useValue: 'en-ie'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
