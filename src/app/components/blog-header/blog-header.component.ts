import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-blog-header',
  templateUrl: './blog-header.component.html',
  styleUrl: './blog-header.component.scss',
})
export class BlogHeaderComponent implements OnInit {
  @Input() headerValue: any;
  inputContent: FormControl = new FormControl();

  ngOnInit() {
    this.inputContent = this.headerValue.controls.value;
  }
}
