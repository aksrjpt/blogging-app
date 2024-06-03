import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrl: './image-upload.component.scss',
})
export class ImageUploadComponent {
  @Input() imageDetails: any;
  imageContent: FormControl = new FormControl();
  altText: string = '';
  url: string | ArrayBuffer = '';
  imageSize: number = 200;

  onSelectFile(event: any) {
    this.imageContent = this.imageDetails.controls.value;

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.url = event?.target?.result ? event?.target?.result : '';
        this.setImageData(this.url, this.imageSize);
      };
    }
  }

  changeWidth(size: number) {
    this.imageSize = size;
    this.setImageData(this.url, this.imageSize);
  }

  setImageData(url: any, size: number) {
    this.imageDetails.setValue({
      type: 'image',
      url: url,
      altText: this.altText,
      imageSize: size,
    });
  }
}
