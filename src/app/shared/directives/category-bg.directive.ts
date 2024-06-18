import { Directive, HostBinding, Input, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../enums/category';

@Directive({
    selector: '[appCategoryBg]',
    standalone: true,
})
export class CategoryBgDirective implements OnInit {
    @Input() category!: Category;
    protected _elementClass: string[] = [];

    @Input('class')
    @HostBinding('class')
    get elementClass(): string {
        return this._elementClass.join(' ');
    }
    set elementClass(val: string) {
        this._elementClass = val.split(' ');
    }
    constructor(private categoryService: CategoryService) {}

    ngOnInit() {
        const bgClass = this.categoryService.getCategoryBgClass(this.category);
        this._elementClass.push(bgClass);
    }
}
