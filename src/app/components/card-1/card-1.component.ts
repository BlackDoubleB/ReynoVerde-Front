import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-card-1',
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './card-1.component.html',
  styleUrl: './card-1.component.css'
})
export class Card1Component {
  @Input() imagenUrl!: string;
  @Input() titulo!: string;
  @Input() precio!: string;
  @Input() clasesExtras: string = '';
}
