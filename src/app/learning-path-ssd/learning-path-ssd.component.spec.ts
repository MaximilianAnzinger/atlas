import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningPathSsdComponent } from './learning-path-ssd.component';

describe('LearningPathSsdComponent', () => {
    let component: LearningPathSsdComponent;
    let fixture: ComponentFixture<LearningPathSsdComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LearningPathSsdComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(LearningPathSsdComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
