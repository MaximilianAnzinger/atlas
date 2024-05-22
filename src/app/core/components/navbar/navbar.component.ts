import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

interface NavItem {
    displayName: string;
}

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [NgOptimizedImage],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
    readonly navItems: NavItem[] = [{ displayName: 'Home' }, { displayName: 'About' }, { displayName: 'Contact' }];
}
