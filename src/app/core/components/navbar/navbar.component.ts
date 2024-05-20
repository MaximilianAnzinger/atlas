import { Component } from '@angular/core';

interface NavItem {
  displayName: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  readonly navItems : NavItem[] = [
    { displayName: 'Home' },
    { displayName: 'About' },
    { displayName: 'Contact' },
  ];

}
