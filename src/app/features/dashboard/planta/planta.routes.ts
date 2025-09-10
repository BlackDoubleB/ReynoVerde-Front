import { Routes } from '@angular/router';

export default [
    
  {
    path: '',
    loadComponent: () => import('./planta-seccion/planta-seccion.component')
  },
  
  {
    path: 'planta/:id/:slug',
    loadComponent: () => import('./planta-detalle/planta-detalle.component'),
    
  },

  {
    path: 'categorias',
    loadComponent: () => import('./categoria/categoria-listar/categoria-listar.component'),
    title: 'Categorías'
  }

] as Routes;
