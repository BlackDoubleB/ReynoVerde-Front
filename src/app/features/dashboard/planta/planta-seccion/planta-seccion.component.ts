import { Component, computed, inject, signal } from '@angular/core';
import { Card1Component } from "../../../../components/card-1/card-1.component";
import { ServiceDashboardService } from '../../services/service-dashboard.service';
import { CommonModule } from '@angular/common';
import BarraFiltroComponent from "../../../../components/barra-filtro/barra-filtro.component";

@Component({
  selector: 'app-planta-seccion',
  imports: [Card1Component, CommonModule, BarraFiltroComponent],
  templateUrl: './planta-seccion.component.html'
})
export default class PlantaSeccionComponent {
  private _plantasService = inject(ServiceDashboardService);
  plantas: any[] = [];
  loading = false;

  estadoFiltro = signal(false);
  mostrarFiltro = computed(() => this.estadoFiltro());

  cambiarEstado() {
    this.estadoFiltro.set(!this.estadoFiltro());
    
   if (this.estadoFiltro()) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

  }


  ngOnInit() {
    this.obtenerplantas();
  }
  obtenerplantas() {
    this._plantasService.obtenerTodoProducto().subscribe({
      next: (data) => {
        this.plantas = data;
        this.loading = false;
         console.error('Error al obtener plantas:', data);
      },
      error: (error) => {
        this.loading = false;
        console.error('Error al obtener plantas:', error);
      }
    })
  }


}
