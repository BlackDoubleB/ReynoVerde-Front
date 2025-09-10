import { CommonModule } from '@angular/common';
import { Component, computed, effect, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-tema',
  imports: [CommonModule],
  templateUrl: './tema.component.html',
})
export class TemaComponent {
  estado = signal(true); 
  claro = computed(() => !this.estado());
  oscuro = computed(() => this.estado());

  mover() {
    this.estado.set(!this.estado());
    document.documentElement.classList.toggle('dark', this.oscuro());
  }
}
