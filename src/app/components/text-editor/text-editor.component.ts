import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.scss',
})
export class TextEditorComponent implements OnInit {
  @Input() contentValue: any;
  content: FormControl = new FormControl();

  ngOnInit() {
    this.content = this.contentValue.controls.value;
  }
}
