import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { CarritoStateService } from '../services/carrito-state.service';
import { plantaDetalle } from '../../../interfaces';
import { CommonModule } from '@angular/common';
import { BotonRedirigirComponent } from "../../../components/botones/boton-redirigir/boton-redirigir.component";

@Component({
  selector: 'app-carrito',
  imports: [CommonModule, BotonRedirigirComponent],
  templateUrl: './carrito.component.html',
})
export default class CarritoComponent {
  _serviceCarrito = inject(CarritoStateService);
  guardarLocal!: Signal<plantaDetalle[]>;

  ngOnInit() {
    this.guardarLocal = signal<plantaDetalle[]>(
      this._serviceCarrito.carritoPlantasS()
    );
  }

  incrementar(id: string) {
    let plantaEncontrada = this.guardarLocal().find((p) => p.id === id);
    if (plantaEncontrada) {
      plantaEncontrada.cantidad = plantaEncontrada.cantidad + 1;
      this._serviceCarrito.agregarPlantaCarrito(plantaEncontrada);
    }
  }

  decrementar(id: string) {
    let plantaEncontrada = this.guardarLocal().find((p) => p.id === id);
    if (plantaEncontrada) {
      if (plantaEncontrada.cantidad <= 0 || plantaEncontrada.cantidad == null) {
        return;
      }
      plantaEncontrada.cantidad = plantaEncontrada.cantidad - 1;
      this._serviceCarrito.agregarPlantaCarrito(plantaEncontrada);
    }
  }

  evitarCaracteres(id: string, event: KeyboardEvent) {
    let plantaEncontrada = this.guardarLocal().find((p) => p.id === id);
    if (plantaEncontrada) {
      if (plantaEncontrada.id === id) {
        if (
          event.key === '-' ||
          event.code === 'Minus' ||
          event.code === 'Equal' ||
          event.key === '+'
        ) {
          event.preventDefault();
          return;
        }
        if (
          event.key === 'Backspace' &&
          plantaEncontrada.cantidad >= 0 &&
          plantaEncontrada.cantidad < 10
        ) {
          event.preventDefault();
          plantaEncontrada.cantidad = 0;
          this._serviceCarrito.agregarPlantaCarrito(plantaEncontrada);
          (event.target as HTMLInputElement).value = '0'; // Reponer en el input
          return;
        }
      }
    }
  }

  getCantidad(id: string) {
    return (
      this._serviceCarrito.carritoPlantasS().find((p) => p.id === id)
        ?.cantidad || 0
    );
  }
  setCantidad(id: string, event: Event) {
    let plantaEncontrada = this.guardarLocal().find((p) => p.id === id);

    if (plantaEncontrada) {
      let valor = (event.target as HTMLInputElement).value;
      if (valor === '') {
        plantaEncontrada.cantidad = 0;
        this._serviceCarrito.agregarPlantaCarrito(plantaEncontrada);
        return;
      }
      if (Number(valor) >= 0) {
        plantaEncontrada.cantidad = Number(valor);
        this._serviceCarrito.agregarPlantaCarrito(plantaEncontrada);
        return;
      }

      plantaEncontrada.cantidad = 0;
      this._serviceCarrito.agregarPlantaCarrito(plantaEncontrada);
    }
  }

  eliminarPlanta(id: string) {
    let plantaEncontrada: plantaDetalle | undefined  = this.guardarLocal().find(
      (p) => p.id === id
    );
    if (plantaEncontrada) {
      this._serviceCarrito.eliminarPlantaCarrito(plantaEncontrada);
    }
  }
}
