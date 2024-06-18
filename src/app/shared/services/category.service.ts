import { Injectable } from '@angular/core';
import { Category } from '../enums/category';

@Injectable({
    providedIn: 'root',
})
export class CategoryService {
    private categoryDescriptors = new Map<Category, string>([
        [Category.LPGeneration, 'learning-path-generation'],
        [Category.StandardizedCompetencies, 'standardized-competencies'],
    ]);

    constructor() {}

    getCategoryDescriptor(category: Category): string | undefined {
        return this.categoryDescriptors.get(category);
    }

    getCategoryBgClass(category: Category): string {
        return `bg-${this.getCategoryDescriptor(category)}`;
    }
}
