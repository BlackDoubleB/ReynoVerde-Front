import { Component } from '@angular/core';
import { PortadaComponent } from '../../../components/portada/portada.component';
import { Card1Component } from '../../../components/card-1/card-1.component';
import { BotonRedirigirComponent } from '../../../components/botones/boton-redirigir/boton-redirigir.component';
import { InicioNosotrosComponent } from './inicio-nosotros/inicio-nosotros.component';
import { InicioComentariosComponent } from './inicio-comentarios/inicio-comentarios.component';
import { InicioCategoriaComponent } from './inicio-categoria/inicio-categoria.component';

@Component({
  selector: 'app-inicio',
  imports: [PortadaComponent, Card1Component, BotonRedirigirComponent, InicioNosotrosComponent, InicioComentariosComponent, InicioCategoriaComponent],
  templateUrl: './inicio.component.html'
})
export default class InicioComponent {
imgVendidas = [
  {
    imagenUrl: 'temporables/plantas/planta1.png',
    titulo: 'Monstera Deliciosa',
    precio: '50.00'
  },
  {
    imagenUrl: 'temporables/plantas/planta2.png',
    titulo: 'Cactus',
    precio: '30.00'
  },
  {
    imagenUrl: 'temporables/plantas/planta3.png',
    titulo: 'Aloe Vera',
    precio: '100.00'
  },
];
}
