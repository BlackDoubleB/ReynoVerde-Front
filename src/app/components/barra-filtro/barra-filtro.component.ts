import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  Output
} from '@angular/core';
import { Categoria } from '../../interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-barra-filtro',
  imports: [CommonModule],
  templateUrl: './barra-filtro.component.html',
  styleUrl: './barra-filtro.component.css',
})
export default class BarraFiltroComponent implements OnInit, OnDestroy {
  private _activatedRoute = inject(ActivatedRoute);
  private _router = inject(Router);
  private _cdr = inject(ChangeDetectorRef);
  private queryParamsSub!: Subscription;

  @Input() categorias: Categoria[] = [];
  @Input() estadoFiltro: boolean = false;

  @Output() huboClick = new EventEmitter<void>();
  @Output() categoriasSeleccionadas = new EventEmitter<string[]>();

  seleccionadas: string[] = [];

  ngOnInit(): void {
    this.escucharCambiosQueryParams();
  }

  ngOnDestroy(): void {
    this.queryParamsSub?.unsubscribe();
  }

  private escucharCambiosQueryParams() {
    this.queryParamsSub = this._activatedRoute.queryParams
      .pipe(
        distinctUntilChanged((prev, curr) => {
          // Comparación profunda para evitar procesamiento innecesario
          return JSON.stringify(prev['categoria']) === JSON.stringify(curr['categoria']);
        })
      )
      .subscribe(params => {
        this.actualizarSeleccionadasDesdeParams(params);
        this._cdr.markForCheck();
      });
  }

  private actualizarSeleccionadasDesdeParams(params: any) {
    const categoriasParam = params['categoria'];
    
    if (categoriasParam) {
      // Elimina duplicados y normaliza a array
      this.seleccionadas = this.normalizarYCategorias(categoriasParam);
    } else {
      this.seleccionadas = [];
    }

    console.log('Categorías seleccionadas (sin duplicados):', this.seleccionadas);
    this.categoriasSeleccionadas.emit([...this.seleccionadas]);
  }

  private normalizarYCategorias(categorias: string | string[]): string[] {
    // Convierte a array si es necesario y elimina duplicados
    const categoriasArray = Array.isArray(categorias) ? categorias : [categorias];
    return [...new Set(categoriasArray)];
  }

  onCheckboxChange(nombreCategoria: string, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;

    if (isChecked) {
      if (!this.seleccionadas.includes(nombreCategoria)) {
        this.seleccionadas = [...this.seleccionadas, nombreCategoria];
      }
    } else {
      this.seleccionadas = this.seleccionadas.filter(
        cat => cat !== nombreCategoria
      );
    }

    this.actualizarURL();
    this.categoriasSeleccionadas.emit([...this.seleccionadas]);
  }

  private actualizarURL() {
    // Asegura que no haya duplicados antes de actualizar la URL
    const categoriasUnicas = [...new Set(this.seleccionadas)];
    
    this._router.navigate([], {
      relativeTo: this._activatedRoute,
      queryParams: { 
        categoria: categoriasUnicas.length ? categoriasUnicas : null 
      },
      queryParamsHandling: 'merge',
      replaceUrl: true // Evita duplicados en el historial de navegación
    });
  }

  notificarClick() {
    this.huboClick.emit();
  }
}