import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { BotonRedirigirComponent } from "../botones/boton-redirigir/boton-redirigir.component";

@Component({
  selector: 'app-card-1',
  imports: [CommonModule, NgOptimizedImage, BotonRedirigirComponent],
  templateUrl: './card-1.component.html',
  styleUrl: './card-1.component.css',
})
export class Card1Component {
  @Input() imagenUrl!: string;
  @Input() nombre!: string;
  @Input() precio!: number;
  @Input() clasesExtras: string = '';
}
