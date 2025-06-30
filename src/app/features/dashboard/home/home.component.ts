import { Component, inject } from '@angular/core';
import { ClimaListarComponent } from "../clima/clima-listar/clima-listar.component";
import { PortadaComponent } from "../../../components/portada/portada.component";
@Component({
  selector: 'app-home',
  imports: [ClimaListarComponent, PortadaComponent],
  templateUrl: './home.component.html',
})
export default class HomeComponent {
}
