import { Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-icon-card',
    standalone: true,
    imports: [FontAwesomeModule],
    templateUrl: './icon-card.component.html',
    styleUrl: './icon-card.component.scss',
})
export class IconCardComponent {
    faIcon = input.required<IconDefinition>();
    title = input<string>();
    body = input<string>();
}
