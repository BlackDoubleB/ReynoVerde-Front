import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { BotonRedirigirComponent } from '../../../../components/botones/boton-redirigir/boton-redirigir.component';
import { Card2Component } from '../../../../components/card-2/card-2.component';
import { ServiceDashboardService } from '../../services/service-dashboard.service';
import { CategoriaProducto } from '../../../../interfaces';
import { EfectoScrollDirective } from '../../directivas/efecto-scroll.directive';

@Component({
  selector: 'app-inicio-categoria',
  imports: [CommonModule, BotonRedirigirComponent, Card2Component, EfectoScrollDirective],
  templateUrl: './inicio-categoria.component.html',
})
export class InicioCategoriaComponent implements OnInit {
  private _obtenerCategoriaProducto = inject(ServiceDashboardService);
  imgCategoria: CategoriaProducto[] = [];

  ngOnInit(): void {
    this._obtenerCategoriaProducto.obtenerCategoriaProductoInicio().subscribe({
      next: (cp) => {
        this.imgCategoria = [...cp, ...cp];
        console.log("categoriaimagenes: ",this.imgCategoria)
      },
    });
  }
  
}
