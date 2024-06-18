import { Component } from '@angular/core';
import { FaIconComponent, FaStackComponent, FaStackItemSizeDirective } from '@fortawesome/angular-fontawesome';
import { ContributorCardComponent } from '../shared/components/contributor-card/contributor-card.component';
import { Contributor } from '../shared/models/contributor';
import { ContributorService } from '../shared/services/contributor.service';

@Component({
    selector: 'app-contributors',
    standalone: true,
    imports: [FaIconComponent, FaStackComponent, FaStackItemSizeDirective, ContributorCardComponent],
    templateUrl: './contributors.component.html',
    styleUrl: './contributors.component.scss',
})
export class ContributorsComponent {
    contributors: Contributor[];

    constructor(private contributorService: ContributorService) {
        this.contributors = this.contributorService.getContributors();
    }
}
