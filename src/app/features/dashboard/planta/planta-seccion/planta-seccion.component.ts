import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Card1Component } from '../../../../components/card-1/card-1.component';
import { ServiceDashboardService } from '../../services/service-dashboard.service';
import { CommonModule } from '@angular/common';
import BarraFiltroComponent from '../../../../components/barra-filtro/barra-filtro.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-planta-seccion',
  imports: [Card1Component, CommonModule, BarraFiltroComponent],
  templateUrl: './planta-seccion.component.html',
})
export default class PlantaSeccionComponent implements OnInit {
  private _plantasService = inject(ServiceDashboardService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  plantas: any[] = [];
  loading = false;
  categorias: any[] = [];
  estadoFiltro = signal(false);
  mostrarFiltro = computed(() => this.estadoFiltro());

  // Variables para filtros
  categoriasSeleccionadas: string[] = [];
  nombreFiltro: string | null = null;

  cambiarEstado() {
    this.estadoFiltro.set(!this.estadoFiltro());

    if (this.estadoFiltro()) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }

  ngOnInit(): void {
    this._plantasService
      .ObtenerTodaCategoria()
      .subscribe((resultado) => (this.categorias = resultado));
    
    this.obtenerPlantas();
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

     if(categorias.length ===0){
        queryParams.categoria = null;
    }
    console.log("queryParams", queryParams);

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: queryParams,
      queryParamsHandling: 'merge',
    });
  }

  onCategoriasSeleccionadas(categorias: string[]) {
    this.categoriasSeleccionadas = categorias;
    console.log('Categorías seleccionadas:', this.categoriasSeleccionadas);
    this.obtenerPlantas(this.categoriasSeleccionadas, this.nombreFiltro);
  }

  filtrarPorNombre(nombre: string) {
    this.nombreFiltro = nombre;
    this.obtenerPlantas(this.categoriasSeleccionadas, this.nombreFiltro);
  }
}
