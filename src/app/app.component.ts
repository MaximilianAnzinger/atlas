import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { IconCardComponent } from './shared/components/icon-card/icon-card.component';
import { Contributor } from './shared/models/contributor';
import { Category } from './shared/enums/category';
import { ContributorCardComponent } from './shared/components/contributor-card/contributor-card.component';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { LearningPathSsdComponent } from './learning-path-ssd/learning-path-ssd.component';
import { ContributorsComponent } from './contributors/contributors.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NavbarComponent, IconCardComponent, ContributorCardComponent, LearningPathSsdComponent, ContributorsComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'atlas';

    protected readonly faCoffee = faCoffee;
}
