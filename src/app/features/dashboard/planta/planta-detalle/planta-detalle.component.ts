import {
  Component,
  effect,
  inject,
  Input,
  OnInit,
  signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceDashboardService } from '../../services/service-dashboard.service';
import {
  plantaDetalle,
  ProductoCategoria,
  tipoLista,
} from '../../../../interfaces';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarritoStateService } from '../../services/carrito-state.service';

@Component({
  selector: 'app-planta-detalle',
  imports: [NgOptimizedImage, CommonModule, FormsModule],
  templateUrl: './planta-detalle.component.html',
  styleUrl: './planta-detalle.component.css',
})
export default class PlantaDetalleComponent implements OnInit {
  _rutaPlantaDetalla = inject(ActivatedRoute);
  _serviceDashboard = inject(ServiceDashboardService);
  _serviceCarrito = inject(CarritoStateService);

  productoDetalle: ProductoCategoria | null = null;

  oraciones: string[] = [];
  beneficio?: string;
  cuidado?: string;
  listaBeneficios: string[] = [];
  listaCuidados: string[] = [];
  datos: tipoLista = {
    beneficios: [],
    cuidados: [],
  };
  plantaDetalleEnviar!: plantaDetalle;
  cantidad = signal<number>(0);

  ngOnInit(): void {
    const id: string | null =
      this._rutaPlantaDetalla.snapshot.paramMap.get('id');

    if (id) {
      this._serviceDashboard.obtenerProductoPorId(id).subscribe((p) => {
        this.productoDetalle = p;

        // Ahora que productoDetalle ya tiene datos, recién se puede extraer la descripción
        const descripcion = p?.productoDescripcion;
        this.oraciones =
          descripcion
            ?.split('@')
            .map((oracion) => oracion.trim())
            .filter((oracion) => oracion.length > 0) || [];

        this.cuidado = this.oraciones[1];
        this.beneficio = this.oraciones[2];

        this.listaBeneficios =
          this.beneficio
            ?.split('/')
            .map((beneficio) => beneficio.trim())
            .filter((beneficio) => beneficio.length > 0) || [];

        this.listaCuidados =
          this.cuidado
            ?.split('/')
            .map((cuidado) => cuidado.trim())
            .filter((cuidado) => cuidado.length > 0) || [];

        for (let i = 0; i < this.listaBeneficios.length; i++) {
          this.datos.beneficios[i] = this.listaBeneficios[i];
        }

        for (let i = 0; i < this.listaCuidados.length; i++) {
          this.datos.cuidados[i] = this.listaCuidados[i];
        }
      });
    }
    
    const dataGuardada = localStorage.getItem('carrito');
    if (dataGuardada) {
      const plantas: plantaDetalle[] = JSON.parse(dataGuardada);
      const item = plantas.find((planta) => planta.id === id);
      if (item) {
        this.cantidad.set(item.cantidad);
      }
    }
  }

  decrementar() {
    if (this.cantidad() == 0 || this.cantidad == null) {
      return;
    }
    this.cantidad.update((valor) => valor - 1);
  }

  incrementar() {
    this.cantidad.update((valor) => valor + 1);
  }

  evitarCaracteres(event: KeyboardEvent) {
    if (
      event.key === '-' ||
      event.code === 'Minus' ||
      event.code === 'Equal' ||
      event.key === '+'
    ) {
      event.preventDefault();
    }
    if (event.key === 'Backspace' && this.cantidad() == 0) {
      event.preventDefault();
    }
  }

  convertirANumero(event: Event): number {
    const valor = (event.target as HTMLInputElement).value;
    return valor === '' ? 0 : Number(valor) || 0;
  }

  agregarCarrito() {
    if (this.productoDetalle) {
      this.plantaDetalleEnviar = {
        id: this.productoDetalle.id,
        productoNombre: this.productoDetalle.productoNombre,
        imagenUrl: this.productoDetalle.imagenUrl,
        precio: this.productoDetalle.precio,
        cantidad: this.cantidad(),
      };
      this._serviceCarrito.agregarPlantaCarrito(this.plantaDetalleEnviar);
    }
  }
}
