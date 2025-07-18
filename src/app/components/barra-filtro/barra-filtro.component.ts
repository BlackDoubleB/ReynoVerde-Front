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
  @Input() estadoFiltro: boolean = false;
  @Input() categoriasSeleccionadasUrl: string[] = [];
  @Output() notificarClickCerrar = new EventEmitter<void>();
  @Output() categoriasSeleccionadas = new EventEmitter<string[]>();

  seleccionadas: string[] = [];
  seleccionadosUrl: string[] = [];

  onCheckboxChange(nombreCategoria: string, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.seleccionadas.push(nombreCategoria);
    } else {
      this.seleccionadas = this.seleccionadas.filter(
        (cat) => cat !== nombreCategoria
      );
    }

    this.categoriasSeleccionadas.emit([...this.seleccionadas]);
  }

  huboClick() {
    this.notificarClickCerrar.emit();
  }

   ngOnInit() {
    // Inicializar con las categorías seleccionadas que vienen del padre
    this.seleccionadas = [...this.categoriasSeleccionadasUrl];
  }
}
