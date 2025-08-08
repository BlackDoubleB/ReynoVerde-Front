import {
  Component,
  EventEmitter,
  HostListener,
  inject,
  Input,
  Output,
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-1',
  imports: [CommonModule, NgOptimizedImage,],
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

  viewCardDetail(cardId: string) {
    this._router.navigate(['plantas', cardId, 'detalle']);
  }

  
}
