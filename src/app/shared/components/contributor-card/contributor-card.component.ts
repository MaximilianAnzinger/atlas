import { Component, input } from '@angular/core';
import { Contributor } from '../../models/contributor';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faImagePortrait } from '@fortawesome/free-solid-svg-icons';
import { CategoryBgDirective } from '../../directives/category-bg.directive';

@Component({
    selector: 'app-contributor-card',
    standalone: true,
    imports: [NgOptimizedImage, FaIconComponent, NgClass, CategoryBgDirective],
    templateUrl: './contributor-card.component.html',
    styleUrl: './contributor-card.component.scss',
})
export class ContributorCardComponent {
    contributor = input.required<Contributor>();
    protected readonly faImagePortrait = faImagePortrait;

    constructor() {}
}
