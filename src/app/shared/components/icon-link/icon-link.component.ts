import { Component, input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'app-icon-link',
    standalone: true,
    imports: [FaIconComponent],
    templateUrl: './icon-link.component.html',
    styleUrl: './icon-link.component.scss',
})
export class IconLinkComponent {
    faIcon = input.required<IconDefinition>();
    url = input.required<string>();
}
