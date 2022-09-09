import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogFeedComponent } from './blog-feed/blog-feed.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: BlogFeedComponent},
  {path: 'post/:id/:slug', component: BlogPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
