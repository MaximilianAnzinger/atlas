import { Component, input } from '@angular/core';
import { Contributor } from '../../models/contributor';
import { NgOptimizedImage } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faImagePortrait } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-contributor-card',
    standalone: true,
    imports: [NgOptimizedImage, FaIconComponent],
    templateUrl: './contributor-card.component.html',
    styleUrl: './contributor-card.component.scss',
})
export class ContributorCardComponent {
    contributor = input.required<Contributor>();
    protected readonly faImagePortrait = faImagePortrait;
}
