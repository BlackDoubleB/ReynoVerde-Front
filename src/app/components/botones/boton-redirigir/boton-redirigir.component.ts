import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-boton-redirigir',
  imports: [RouterModule, CommonModule],
  templateUrl: './boton-redirigir.component.html',
})
export class BotonRedirigirComponent {
  @Input() ruta: string='';
  @Input() clasesExtras: string = '';
  @Input() texto: string = 'Explorar';
}
