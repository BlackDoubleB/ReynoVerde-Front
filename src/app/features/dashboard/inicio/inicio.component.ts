import { Component, ElementRef, inject, Renderer2 } from '@angular/core';
import { PortadaComponent } from '../../../components/portada/portada.component';
import { Card1Component } from '../../../components/card-1/card-1.component';
import { BotonRedirigirComponent } from '../../../components/botones/boton-redirigir/boton-redirigir.component';
import { InicioNosotrosComponent } from './inicio-nosotros/inicio-nosotros.component';
import { InicioComentariosComponent } from './inicio-comentarios/inicio-comentarios.component';
import { InicioCategoriaComponent } from './inicio-categoria/inicio-categoria.component';
import { ServiceDashboardService } from '../services/service-dashboard.service';
import { Producto } from '../../../interfaces';

@Component({
  selector: 'app-inicio',
  imports: [
    PortadaComponent,
    Card1Component,
    BotonRedirigirComponent,
    InicioNosotrosComponent,
    InicioComentariosComponent,
    InicioCategoriaComponent
  ],
  templateUrl: './inicio.component.html',
})

export default class InicioComponent {
  private _obtenerProductosPrincipales = inject(ServiceDashboardService);
  imgVendidas: Producto[] = [];
  renderer = inject(Renderer2);
  onHover = false;

  ngOnInit() {
    this._obtenerProductosPrincipales.obtenerProductosPrincipales().subscribe({
      next: (producto) => (this.imgVendidas = producto),
    });
  }
}
