import { NgOptimizedImage } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-comentarios',
  imports: [NgOptimizedImage],
  templateUrl: './comentarios.component.html',
})
export class ComentariosComponent {
  @Input() comentario: string = "";
  @Input() imagen: string = "";
  @Input() nombreUsuario: string = "";
  @Input() fecha: string = "";
}
