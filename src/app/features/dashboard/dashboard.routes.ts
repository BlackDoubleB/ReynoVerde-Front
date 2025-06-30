import { Routes } from '@angular/router';

export default [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./home/home.component') },
    { path: 'about', loadComponent: () => import('./about/about.component'), title: 'about' },
] as Routes;