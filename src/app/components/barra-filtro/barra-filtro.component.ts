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
  styleUrl: './barra-filtro.component.css',
})
export default class BarraFiltroComponent implements OnInit {
  _router = inject(Router);
  _activatedRoute = inject(ActivatedRoute); 
  @Input() categorias: Categoria[] = [];
  @Input() estadoFiltro: boolean = false;

  @Output() huboClick = new EventEmitter<void>();
  @Output() categoriasSeleccionadas = new EventEmitter<string[]>();

  //Array para rastrear las categorias seleccionadas
  seleccionadas: string[] = [];
  seleccionadosUrl: string[] = [];

  // Método para manejar cambios en los checkboxes
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

  notificarClick() {
    this.huboClick.emit();
  }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe((params) => {
      this.seleccionadas = params['categoria']||[];
    })
  }
}
