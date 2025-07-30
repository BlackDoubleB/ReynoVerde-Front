import { Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { Card1Component } from '../../../../components/card-1/card-1.component';
import { ServiceDashboardService } from '../../services/service-dashboard.service';
import { CommonModule } from '@angular/common';
import BarraFiltroComponent from '../../../../components/barra-filtro/barra-filtro.component';
import { ActivatedRoute, Router } from '@angular/router';
import { EfectoScrollDirective } from '../../directivas/efecto-scroll.directive';

@Component({
  selector: 'app-planta-seccion',
  imports: [Card1Component, CommonModule, BarraFiltroComponent,EfectoScrollDirective],
  templateUrl: './planta-seccion.component.html',
})
export default class PlantaSeccionComponent implements OnInit {
  private _plantasService = inject(ServiceDashboardService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  plantas: any[] = [];
  loading = false;

  categorias: any[] = [];
  categoriasSeleccionadasUrl: [string[], string] = [[], ''];
  nombreFiltro: string | null = null;
  mostrarFiltro = signal(false);
  
  abrirFiltro() {
    this.mostrarFiltro.set(true);
    document.body.classList.add('overflow-hidden');
  }

  cerrarFiltro() {
    this.mostrarFiltro.set(false);
    document.body.classList.remove('overflow-hidden');    
  }



  ngOnInit(): void {
    this._plantasService
      .ObtenerTodaCategoria()
      .subscribe((resultado) => (this.categorias = resultado));

    this.activatedRoute.queryParams.subscribe((params) => {
      let categoria = params['categoria'] || [];
      let nombre = params['nombre'] || ''

      categoria = Array.isArray(categoria) ? categoria : [categoria];
      let array = [...categoria];
      this.categoriasSeleccionadasUrl = [[...new Set(array)],nombre];
     
    });
    
    this.obtenerPlantas(this.categoriasSeleccionadasUrl[0], this.categoriasSeleccionadasUrl[1]);
  }

  
  todoplanta = false;
  plantaporcategoria = false;
  plantapornombre = false;

  obtenerPlantas(categorias: string[] = [], nombre: string | null = null) {
    this.loading = true;

    this.actualizarURL(categorias, nombre);

    this._plantasService.obtenerProductoFiltrado(categorias, nombre).subscribe({
      next: (data) => {
        this.plantas = data;
        this.loading = false;
      },
      error: (error) => {
        this.loading = false;
        console.error('Error al obtener plantas:', error);
      },
    });
  }

  private actualizarURL(categorias: string[], nombre: string | null) {
    let queryParams: any = {};

    if (categorias.length > 0) {
      queryParams.categoria = categorias;
    }

    if (nombre) {
      queryParams.nombre = nombre;
    }

    if (categorias.length === 0) {
      queryParams.categoria = null;
    }
    if(nombre == '')
    {
      queryParams.nombre = null;
    }
    console.log('queryParams', queryParams);

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: queryParams,
      queryParamsHandling: 'merge',
    });
  }

  onCategoriasSeleccionadas(categoriasNombre: [string[], string]) {
   
    this.obtenerPlantas(categoriasNombre[0], categoriasNombre[1]);
  }



}
