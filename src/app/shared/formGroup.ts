import { FormControl, FormGroup } from '@angular/forms';

export class BLOG_FORM_GROUPS {
  static BLOG_HEADER = new FormGroup({
    type: new FormControl('MainHeader'),
    value: new FormControl(''),
  });

  static BODY_CONTENT = new FormGroup({
    type: new FormControl('bodyContent'),
    value: new FormControl(''),
  });

  static IMAGE_CONTENT = new FormGroup({
    type: new FormControl('image'),
    url: new FormControl(''),
    altText: new FormControl(''),
    imageSize: new FormControl(200),
  });
}
