import { Component, inject } from '@angular/core';
import { ClimaListarComponent } from "../clima/clima-listar/clima-listar.component";
import { PortadaComponent } from "../../../components/portada/portada.component";
import { Card1Component } from "../../../components/card-1/card-1.component";
import AboutComponent from "../about/about.component";
import { Card2Component } from "../../../components/card-2/card-2.component";
@Component({
  selector: 'app-home',
  imports: [ClimaListarComponent, PortadaComponent, Card1Component, AboutComponent, Card2Component],
  templateUrl: './home.component.html',
})
export default class HomeComponent {
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
