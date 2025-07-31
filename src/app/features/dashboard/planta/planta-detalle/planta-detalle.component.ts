import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceDashboardService } from '../../services/service-dashboard.service';
import { ProductoCategoria } from '../../../../interfaces';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-planta-detalle',
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './planta-detalle.component.html',
  styleUrl: './planta-detalle.component.css',
})
export default class PlantaDetalleComponent implements OnInit{
  _rutaPlantaDetalla = inject(ActivatedRoute);
  _serviceDashboard = inject(ServiceDashboardService)
  
   productoDetalle: ProductoCategoria | null = null;

  ngOnInit(): void {
    const id: string | null  = this._rutaPlantaDetalla.snapshot.paramMap.get('id');
    if(id){
      this._serviceDashboard.obtenerProductoPorId(id).subscribe(p => this.productoDetalle = p)
    }
  }

  

}
