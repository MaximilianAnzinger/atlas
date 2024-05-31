import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { IconCardComponent } from './shared/components/icon-card/icon-card.component';
import { Contributor } from './shared/models/contributor';
import { Category } from './shared/enums/category';
import { ContributorCardComponent } from './shared/components/contributor-card/contributor-card.component';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NavbarComponent, IconCardComponent, ContributorCardComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'atlas';
    contributors: Contributor[] = [
        {
            firstName: 'John',
            lastName: 'Doe',
            titlePrefix: 'Dr.',
            titleSuffix: 'PhD',
            imgSrc: 'https://avatars.githubusercontent.com/u/44003963?v=4',
            categories: [Category.LPGeneration, Category.StandardizedCompetencies],
        },
        {
            firstName: 'Jane',
            lastName: 'Doe',
            titlePrefix: 'Dr.',
            titleSuffix: 'PhD',
            imgSrc: 'https://avatars.githubusercontent.com/u/44003963?v=4',
            categories: [Category.LPGeneration],
        },
        {
            firstName: 'John',
            lastName: 'Doe',
            categories: [Category.StandardizedCompetencies],
        },
    ];

    protected readonly faCoffee = faCoffee;
}
