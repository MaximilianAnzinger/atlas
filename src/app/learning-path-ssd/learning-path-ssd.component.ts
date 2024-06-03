import { Component } from '@angular/core';
import { FaIconComponent, FaStackComponent, FaStackItemSizeDirective } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faArrowLeftLong, faArrowRight, faArrowRightLong, faBrain, faPerson, faRepeat, faSquarePollVertical } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-learning-path-ssd',
    standalone: true,
    imports: [FaIconComponent, FaStackComponent, FaStackItemSizeDirective],
    templateUrl: './learning-path-ssd.component.html',
    styleUrl: './learning-path-ssd.component.scss',
})
export class LearningPathSsdComponent {
    protected readonly faBrain = faBrain;
    protected readonly faPerson = faPerson;
    protected readonly faSquarePollVertical = faSquarePollVertical;
    protected readonly faArrowRight = faArrowRight;
    protected readonly faArrowLeft = faArrowLeft;
    protected readonly faArrowRightLong = faArrowRightLong;
    protected readonly faArrowLeftLong = faArrowLeftLong;
    protected readonly faRepeat = faRepeat;
}
