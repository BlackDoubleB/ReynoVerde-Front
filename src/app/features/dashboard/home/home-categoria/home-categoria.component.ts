import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonRedirigirComponent } from "../../../../components/botones/boton-redirigir/boton-redirigir.component";
import { Card2Component } from "../../../../components/card-2/card-2.component";

@Component({
  selector: 'app-home-categoria',
  imports: [CommonModule, BotonRedirigirComponent, Card2Component],
  templateUrl: './home-categoria.component.html',
  styleUrl: './home-categoria.component.css'
})
export class HomeCategoriaComponent {
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
