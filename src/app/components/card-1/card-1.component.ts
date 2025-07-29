import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-card-1',
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './card-1.component.html',
  styleUrl: './card-1.component.css'
})
export class Card1Component {
  @Input() imagenUrl!: string;
  @Input() nombre!: string;
  @Input() precio!: number;
  @Input() clasesExtras: string = '';

}
