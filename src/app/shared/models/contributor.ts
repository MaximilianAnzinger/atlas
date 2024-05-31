import { Category } from '../enums/category';

export interface Contributor {
    firstName: string;
    lastName: string;
    titlePrefix?: string;
    titleSuffix?: string;
    imgSrc?: string;
    categories: Category[];
}
