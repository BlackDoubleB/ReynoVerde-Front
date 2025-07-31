import {
  Component,
  EventEmitter,
  HostListener,
  inject,
  Input,
  Output,
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { BotonRedirigirComponent } from '../botones/boton-redirigir/boton-redirigir.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-1',
  imports: [CommonModule, NgOptimizedImage, BotonRedirigirComponent],
  templateUrl: './card-1.component.html',
  styleUrl: './card-1.component.css',
})
export class Card1Component {
  _router = inject(Router);
  @Input() imagenUrl!: string;
  @Input() nombre!: string;
  @Input() precio!: number;
  @Input() id!: string;
  @Input() clasesExtras: string = '';
  @Input() mostrarHover: boolean = false;

  viewCardDetail(cardId: string) {
    this._router.navigate(['plantas', cardId, 'detalle']);
    console.log("esto es el id:", this.id)
  }

  
}
