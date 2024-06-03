import { Routes } from '@angular/router';
import { AddEditBlogComponent } from './pages/add-edit-blog/add-edit-blog.component';
import { ViewBlogComponent } from './pages/view-blog/view-blog.component';

export const routes: Routes = [
  { path: '', component: AddEditBlogComponent },
  { path: 'add-blog', component: AddEditBlogComponent },
  { path: 'view-blog', component: ViewBlogComponent },
  { path: '**', redirectTo: '' },
];
