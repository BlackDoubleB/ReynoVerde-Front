import { Routes } from '@angular/router';

export default [
  { path: 'login', loadComponent: () => import('./login/login.component') },
  {
    path: 'registro',loadComponent: () => import('./registro-usuario/registro-usuario.component'),
  },
] as Routes;
