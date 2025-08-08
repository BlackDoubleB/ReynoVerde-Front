import { Component, inject, OnInit, signal } from '@angular/core';
import { CarritoStateService } from '../services/carrito-state.service';
import { plantaDetalle } from '../../../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrito',
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css',
})
export default class CarritoComponent  {
  _serviceCarrito = inject(CarritoStateService);
   plantas = signal<{ id: string; cantidad: number}[]>([]);
 
ngOnInit() {
  const dataGuardada = localStorage.getItem('carrito');
  if (dataGuardada) {
    const plantasGuardadas = JSON.parse(dataGuardada);
    this.plantas.set(plantasGuardadas); // [{id, cantidad}, ...]
  }
}


incrementar(id: string) {
  this.plantas.update(lista =>
    lista.map(item =>
      item.id === id
        ? { ...item, cantidad: item.cantidad + 1 }
        : item
    )
  );
  this.guardarEnLocalStorage();
}

decrementar(id: string) {
  this.plantas.update(lista =>
    lista.map(item =>
      item.id === id && item.cantidad > 0
        ? { ...item, cantidad: item.cantidad - 1 }
        : item
    )
  );
  this.guardarEnLocalStorage();
}
guardarEnLocalStorage() {
  localStorage.setItem('carrito', JSON.stringify(this.plantas()));
}

//  evitarCaracteres(event: KeyboardEvent) {
//     if (
//       event.key === '-' ||
//       event.code === 'Minus' ||
//       event.code === 'Equal' ||
//       event.key === '+'
//     ) {
//       event.preventDefault();
//     }
//     if (event.key === 'Backspace' && this.cantidad() == 0) {
//       event.preventDefault();
//     }
//   }
//    convertirANumero(event: Event): number {
//     const valor = (event.target as HTMLInputElement).value;
//     return valor === '' ? 0 : Number(valor) || 0;
//   }


actualizarCantidad(id: string, event: Event) {
  const valor = Number((event.target as HTMLInputElement).value) || 0;
  this.plantas.update(lista =>
    lista.map(item =>
      item.id === id ? { ...item, cantidad: valor } : item
    )
  );
  this.guardarEnLocalStorage();
}

getCantidad(id: string) {
  return this.plantas().find(p => p.id === id)?.cantidad || 0;
}
}
