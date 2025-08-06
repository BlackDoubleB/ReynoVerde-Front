import { Component, inject, OnInit } from '@angular/core';
import { CarritoStateService } from '../services/carrito-state.service';
import {  plantaDetalle } from '../../../interfaces';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css',
})
export default class CarritoComponent implements OnInit {
  private _serviceCarrito = inject(CarritoStateService);
  datosCarritoS!: plantaDetalle[];

  ngOnInit(): void {
    this.datosCarritoS = this._serviceCarrito.obtenerPlantaCarrito();
    console.log("Los carritos son:", this.datosCarritoS);
  }
}
