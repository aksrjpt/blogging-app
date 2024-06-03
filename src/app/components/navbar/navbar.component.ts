import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Create Blog',
        icon: 'pi pi-id-card',
        routerLink: '/add-blog',
      },
      {
        label: 'View Blog',
        icon: 'pi pi-heart-fill',
        routerLink: '/view-blog',
      },
    ];
  }
}
