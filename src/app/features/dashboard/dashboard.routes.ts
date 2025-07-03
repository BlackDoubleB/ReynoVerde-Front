import { Routes } from '@angular/router';

export default [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./home/home.component') },
    { path: 'plantas', 
      loadChildren: () => import('./planta/planta.routes'), title: 'plantas'}
    
] as Routes;