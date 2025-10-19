import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Categoria } from '../../interfaces';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-barra-filtro',
  imports: [CommonModule],
  templateUrl: './barra-filtro.component.html',
})
export default class BarraFiltroComponent {
  _router = inject(Router);
  _activatedRoute = inject(ActivatedRoute);

  @Input() categorias: Categoria[] = [];
  @Input() clasesExtra: Record<string, boolean> = {};
  @Input() categoriasSeleccionadasUrl: [string[] , string ] = [[],''];
  @Output() notificarClickCerrar = new EventEmitter<void>();
  @Output() categoriasSeleccionadas = new EventEmitter<[string[], string]>();

  seleccionadas: string[] = [];
  seleccionadosUrl: string[] = [];
  nombre: string = '';
  onCheckboxChange(nombreCategoria: string, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.seleccionadas.push(nombreCategoria);
    } else {
      this.seleccionadas = this.seleccionadas.filter(
        (cat) => cat !== nombreCategoria
      );
    }
    this.categoriasSeleccionadas.emit([[...this.seleccionadas], this.nombre ]);
  }

  onNombreIngresado(event: Event){
    this.nombre = (event.target as HTMLInputElement).value;
    this.categoriasSeleccionadas.emit([[...this.seleccionadas], this.nombre ]);
  }

  huboClick() {
    this.notificarClickCerrar.emit();
  }

  ngOnInit() {
    this.seleccionadas = [...this.categoriasSeleccionadasUrl[0]];
    this.nombre= this.categoriasSeleccionadasUrl[1];
  }

}
