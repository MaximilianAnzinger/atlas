import { Category } from '../enums/category';
import { Role } from '../enums/role';

export interface Contributor {
    firstName: string;
    lastName: string;
    titlePrefix?: string;
    titleSuffix?: string;
    imgSrc?: string;
    categories: Category[];
    role: Role;
}
