import { Component, inject } from '@angular/core';
import {ClimaServiceService} from '../service/clima-service.service'

@Component({
  selector: 'app-clima-listar',
  imports: [],
  templateUrl: './clima-listar.component.html',
  styleUrl: './clima-listar.component.css'
})
export class ClimaListarComponent {
 climaServiceService = inject(ClimaServiceService);
  climas: any[] = [];
  constructor() {
    this.climaServiceService.obtenerClima().subscribe((datos) => {
      this.climas = datos;
    });
  }
}
