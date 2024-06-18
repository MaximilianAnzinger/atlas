import { Injectable } from '@angular/core';
import { Contributor } from '../models/contributor';
import { Category } from '../enums/category';
import { Role } from '../enums/role';

@Injectable({
    providedIn: 'root',
})
export class ContributorService {
    private contributors: Contributor[] = [
        {
            firstName: 'John',
            lastName: 'Doe',
            titlePrefix: 'Dr.',
            titleSuffix: 'PhD',
            imgSrc: 'https://avatars.githubusercontent.com/u/44003963?v=4',
            categories: [Category.LPGeneration, Category.StandardizedCompetencies],
            role: Role.DEVELOPER,
        },
        {
            firstName: 'Jane',
            lastName: 'Doe',
            titlePrefix: 'Dr.',
            titleSuffix: 'PhD',
            imgSrc: 'https://avatars.githubusercontent.com/u/44003963?v=4',
            categories: [Category.LPGeneration],
            role: Role.PROJECT_MANAGER,
        },
        {
            firstName: 'John',
            lastName: 'Doe',
            categories: [Category.StandardizedCompetencies],
            role: Role.DEVELOPER,
        },
        {
            firstName: 'John',
            lastName: 'Doe',
            categories: [Category.StandardizedCompetencies],
            role: Role.DEVELOPER,
        },
        {
            firstName: 'John',
            lastName: 'Doe',
            categories: [Category.StandardizedCompetencies],
            role: Role.DEVELOPER,
        },
    ];
    constructor() {
        this.contributors.sort(this.compareByRoleThenName);
    }

    /**
     * Returns the list of contributors
     */
    getContributors(): Contributor[] {
        return this.contributors;
    }

    /**
     * Compares two contributors by role and then by name
     *
     * @param a contributor
     * @param b contributor
     * @private
     */
    private compareByRoleThenName(a: Contributor, b: Contributor): number {
        // Sort by role
        if (a.role == Role.PROJECT_MANAGER && b.role != Role.PROJECT_MANAGER) return -1;
        if (a.role != Role.PROJECT_MANAGER && b.role == Role.PROJECT_MANAGER) return 1;

        // If role is the same, sort by lastName
        if (a.lastName < b.lastName) return -1;
        if (a.lastName > b.lastName) return 1;

        // If lastName is the same, sort by firstName
        if (a.firstName < b.firstName) return -1;
        if (a.firstName > b.firstName) return 1;

        return 0;
    }
}
