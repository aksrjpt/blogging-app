import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeedDialModule } from 'primeng/speeddial';
import { ComponentsModule } from '../components/components.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEditBlogComponent } from './add-edit-blog/add-edit-blog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogMockClient } from '../client/mockdata.client';

@NgModule({
  declarations: [DashboardComponent, AddEditBlogComponent, ViewBlogComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    SpeedDialModule,
  ],
  exports: [DashboardComponent],
  providers: [BlogMockClient],
})
export class PagesModule {}
