import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-barra-filtro',
  imports: [CommonModule],
  templateUrl: './barra-filtro.component.html',
  styleUrl: './barra-filtro.component.css'
})
export default class BarraFiltroComponent {
@Input() estadoFiltro: boolean = false;
@Output() huboClick = new EventEmitter<void>();
notificarClick() {
    this.huboClick.emit();
  }
}
