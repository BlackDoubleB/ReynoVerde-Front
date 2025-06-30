import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-tema',
  imports: [CommonModule],
  templateUrl: './tema.component.html',
  styleUrl: './tema.component.css'
})
export class TemaComponent {
  estado = signal(false);
  claro = computed(() => !this.estado());
  oscuro = computed(() => this.estado());
  mover() {
   this.estado.set(!this.estado());
  }
}
