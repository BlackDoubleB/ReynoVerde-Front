import { NgOptimizedImage } from '@angular/common';
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-card-2',
  imports: [NgOptimizedImage],
  templateUrl: './card-2.component.html',
  styleUrl: './card-2.component.css',
})
export class Card2Component {
  @Input() imagenUrl!: string;
  @Input() categoria!: string;
  @Input() descripcion!: string;
}
