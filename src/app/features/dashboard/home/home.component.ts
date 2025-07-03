import { Component, inject } from '@angular/core';
import { ClimaListarComponent } from "../clima/clima-listar/clima-listar.component";
import { PortadaComponent } from "../../../components/portada/portada.component";
import { Card1Component } from "../../../components/card-1/card-1.component";
import AboutComponent from "../about/about.component";
import { HomeCategoriaComponent } from "./home-categoria/home-categoria.component";
import { BotonRedirigirComponent } from "../../../components/botones/boton-redirigir/boton-redirigir.component";
import { HomeComentariosComponent } from "./home-comentarios/home-comentarios.component";
@Component({
  selector: 'app-home',
  imports: [PortadaComponent, Card1Component, AboutComponent, HomeCategoriaComponent, BotonRedirigirComponent, HomeComentariosComponent],
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


}
