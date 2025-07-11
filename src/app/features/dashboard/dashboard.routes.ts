import { Routes } from '@angular/router';

export default [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', loadComponent: () => import('./inicio/inicio.component') },
    { path: 'plantas', 
      loadChildren: () => import('./planta/planta.routes'), title: 'plantas'}
    
] as Routes;