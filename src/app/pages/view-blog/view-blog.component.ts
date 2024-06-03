import { Component } from '@angular/core';
import { BlogMockClient } from '../../client/mockdata.client';
import { Observable } from 'rxjs';
import { Blog } from '../../models/blog.model';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
})
export class ViewBlogComponent {
  blogData$: Observable<Blog[]>;

  constructor(blogMockClient: BlogMockClient) {
    this.blogData$ = blogMockClient.getAll$();
  }
}
