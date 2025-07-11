import { Routes } from '@angular/router';
import { LayoutComponent } from './features/dashboard/layout/layout.component';
import { privateGuard } from './features/core/auth.guard';


export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [privateGuard],
    loadChildren: () => import('./features/dashboard/dashboard.routes'),
    title: 'Inicio'
   
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes'),
    title: 'auth'
  },
  
];
