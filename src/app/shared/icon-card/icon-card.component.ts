import { Component, input } from '@angular/core';

@Component({
    selector: 'app-icon-card',
    standalone: true,
    imports: [],
    templateUrl: './icon-card.component.html',
    styleUrl: './icon-card.component.scss',
})
export class IconCardComponent {
    bsIconClass = input.required<string>();
    title = input<string>();
    body = input<string>();
}
