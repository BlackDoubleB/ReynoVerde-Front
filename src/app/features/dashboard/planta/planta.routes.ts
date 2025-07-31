import { Routes } from '@angular/router';

export default [
    
  {
    path: '',
    loadComponent: () => import('./planta-seccion/planta-seccion.component')
  },
  
  {
    path: ':id/detalle',
    loadComponent: () => import('./planta-detalle/planta-detalle.component'),
    title: 'Categorías'
  },

  {
    path: 'categorias',
    loadComponent: () => import('./categoria/categoria-listar/categoria-listar.component'),
    title: 'Categorías'
  }

] as Routes;
