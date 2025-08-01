import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceDashboardService } from '../../services/service-dashboard.service';
import { ProductoCategoria, tipoLista } from '../../../../interfaces';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-planta-detalle',
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './planta-detalle.component.html',
  styleUrl: './planta-detalle.component.css',
})
export default class PlantaDetalleComponent implements OnInit {
  _rutaPlantaDetalla = inject(ActivatedRoute);
  _serviceDashboard = inject(ServiceDashboardService);

  productoDetalle: ProductoCategoria | null = null;

  oraciones: string[] = [];
  beneficio?: string;
  cuidado?: string;
  listaBeneficios: string[] = [];
  listaCuidados: string[] = [];
  datos: tipoLista = {
    beneficios: [],
    cuidados: [],
  };

  ngOnInit(): void {
    const id: string | null =
      this._rutaPlantaDetalla.snapshot.paramMap.get('id');

    if (id) {
      this._serviceDashboard.obtenerProductoPorId(id).subscribe((p) => {
        this.productoDetalle = p;

        // Ahora que productoDetalle ya tiene datos, recién se puede extraer la descripción
        const descripcion = p?.productoDescripcion;
        this.oraciones =
          descripcion
            ?.split('@')
            .map((oracion) => oracion.trim())
            .filter((oracion) => oracion.length > 0) || [];

        this.cuidado = this.oraciones[1];
        this.beneficio = this.oraciones[2];

        this.listaBeneficios =
          this.beneficio
            ?.split('/')
            .map((beneficio) => beneficio.trim())
            .filter((beneficio) => beneficio.length > 0) || [];

        this.listaCuidados =
          this.cuidado
            ?.split('/')
            .map((cuidado) => cuidado.trim())
            .filter((cuidado) => cuidado.length > 0) || [];

        for (let i = 0; i < this.listaBeneficios.length; i++) {
          this.datos.beneficios[i] = this.listaBeneficios[i];
        }

        for (let i = 0; i < this.listaCuidados.length; i++) {
          this.datos.cuidados[i] = this.listaCuidados[i];
        }
      });
    }
  }
}
