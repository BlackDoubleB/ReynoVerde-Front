import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { privateGuard } from './components/core/auth.guard';
export const routes: Routes = [
  { 
    path: 'home', 
    canActivate: [privateGuard()], 
    component: HomeComponent 
 },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes'),
  },
];
