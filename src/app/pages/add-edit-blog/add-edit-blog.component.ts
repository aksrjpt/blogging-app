import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { BLOG_FORM_GROUPS } from '../../shared/formGroup';

@Component({
  selector: 'app-add-edit-blog',
  templateUrl: './add-edit-blog.component.html',
  styleUrl: './add-edit-blog.component.scss',
})
export class AddEditBlogComponent implements OnInit {
  public items: any = [];
  blog = new FormGroup({
    blogContent: new FormArray([]),
  });

  ngOnInit(): void {
    this.items = [
      {
        icon: 'pi pi-pencil',
        command: () => {
          this.addBodyContent();
        },
      },
      {
        icon: 'pi pi-image',
        command: () => {
          this.addImage();
        },
      },
    ];

    this.addHeader();
  }

  addHeader() {
    const header = BLOG_FORM_GROUPS.BLOG_HEADER;
    this.blogForm.push(header);
  }

  trackByIndex(index: number) {
    return index;
  }

  addBodyContent() {
    const bodyContent = BLOG_FORM_GROUPS.BODY_CONTENT;
    this.blogForm.push(bodyContent);
  }

  addImage() {
    const imageContent = BLOG_FORM_GROUPS.IMAGE_CONTENT;
    this.blogForm.push(imageContent);
  }

  saveBlog() {
    console.log(this.blog.value);
  }

  get blogForm() {
    return this.blog.get('blogContent') as FormArray;
  }
}
