import { Component, inject } from '@angular/core';
import { WeatherForecastService } from '../../weatherforecast.service';
import { CategoriaCrearComponent } from "../categoria/categoria-crear/categoria-crear.component";

@Component({
  selector: 'app-home',
  imports: [CategoriaCrearComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  weatherForecastService = inject(WeatherForecastService);
  climas:any[] = [];
  constructor() {
    this.weatherForecastService.obtenerClima().subscribe(datos=> {
      this.climas = datos;
    });
  }
}
