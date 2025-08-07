import { Component, inject, OnInit } from '@angular/core';
import { CarritoStateService } from '../services/carrito-state.service';
import { plantaDetalle } from '../../../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrito',
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css',
})
export default class CarritoComponent {
  _serviceCarrito = inject(CarritoStateService);
  
}
