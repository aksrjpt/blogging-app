import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
import { BlogHeaderComponent } from './blog-header/blog-header.component';
import { EditorModule } from 'primeng/editor';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonGroupModule } from 'primeng/buttongroup';

const COMPONENTS = [
  NavbarComponent,
  BlogHeaderComponent,
  TextEditorComponent,
  ImageUploadComponent,
];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    MenubarModule,
    AvatarModule,
    BadgeModule,
    InputTextModule,
    EditorModule,
    SpeedDialModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    ButtonGroupModule,
  ],
  exports: [...COMPONENTS],
})
export class ComponentsModule {}
