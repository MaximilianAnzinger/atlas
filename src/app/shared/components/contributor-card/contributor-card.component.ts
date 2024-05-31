import { Component, input } from '@angular/core';
import { Contributor } from '../../models/contributor';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-contributor-card',
    standalone: true,
    imports: [NgOptimizedImage],
    templateUrl: './contributor-card.component.html',
    styleUrl: './contributor-card.component.scss',
})
export class ContributorCardComponent {
    contributor = input.required<Contributor>();
}
