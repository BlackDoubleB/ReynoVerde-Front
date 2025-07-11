import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BotonRedirigirComponent } from '../../../../components/botones/boton-redirigir/boton-redirigir.component';
import { Card2Component } from '../../../../components/card-2/card-2.component';

@Component({
  selector: 'app-inicio-categoria',
  imports: [CommonModule, BotonRedirigirComponent, Card2Component],
  templateUrl: './inicio-categoria.component.html',
})
export class InicioCategoriaComponent {
imgCategoria =[
  {
    imagenUrl: 'temporables/plantas/plantac1.png',
    categoria: 'Naturales',
    descripcion: 'Horem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    imagenUrl: 'temporables/plantas/plantac2.png',
    categoria: 'Accesorios',
    descripcion: 'Horem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    imagenUrl: 'temporables/plantas/plantac3.png',
    categoria: 'Artificiales',
    descripcion: 'Horem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
]
}
