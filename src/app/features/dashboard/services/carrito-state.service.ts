import { computed, effect, Injectable, Signal, signal } from '@angular/core';
import { plantaDetalle } from '../../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class CarritoStateService {
  private _carritoPlantasS = signal<plantaDetalle[]>([]);
  public carritoPlantasS: Signal<plantaDetalle[]> =
    this._carritoPlantasS.asReadonly();

  private _carritoLocalStorage = signal<string | null>(null);
  public carritoLocalStorage: Signal<string | null> =
    this._carritoLocalStorage.asReadonly();

  public totalCarrito: Signal<number> = computed(() => {
    return this._carritoPlantasS().reduce((acumulador, planta) => {
      return acumulador + planta.precio * planta.cantidad;
    }, 0);
  });

  public totalCantidad: Signal<number> = computed(() => {
    return this._carritoPlantasS().reduce((acumulador, planta) => {
      return acumulador + planta.cantidad;
    }, 0);
  });

  constructor() {
    const dataGuardada = localStorage.getItem('carrito');
    if (dataGuardada) {
      const plantas = JSON.parse(dataGuardada);
      this._carritoPlantasS.set(plantas);
      this._carritoLocalStorage.set(dataGuardada);
    }

    effect(() => {
      const carritoActual = this._carritoPlantasS();
      const json = JSON.stringify(carritoActual);
      localStorage.setItem('carrito', json);
      this._carritoLocalStorage.set(json);
    });
  }

  agregarPlantaCarrito(planta: plantaDetalle) {
    
    if (planta.cantidad === 0) {
      return;
    } 
    
    const yaExiste = this._carritoPlantasS().some((p) => p.id === planta.id);

    // map() no es solo para recorrer; su propósito principal es transformar cada elemento de un array y devolver un nuevo array con esos cambios.
    if (yaExiste) {
    this._carritoPlantasS.update(lista => {

      return lista.map(p => {
        if (p.id === planta.id) {
          return {
            ...p,
            cantidad: planta.cantidad,
            precio: planta.precio
          };
        }
        return p;
      });
    });}
    else {
      const carritoActual = this._carritoPlantasS();
      const nuevoCarrito = [...carritoActual, planta];
      this._carritoPlantasS.set(nuevoCarrito);
    }
  }
}
