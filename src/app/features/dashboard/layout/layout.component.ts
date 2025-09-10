import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { TemaComponent } from '../../../components/tema/tema.component';
import { CarritoStateService } from '../services/carrito-state.service';
import { AuthStateService } from '../../services/auth/auth.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-layout',
  imports: [RouterModule, TemaComponent, TemaComponent, RouterLink],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  showCerrarSesion = false;
  _serviceCarrito = inject(CarritoStateService);
  _authStateService = inject(AuthStateService);
  _router = inject(Router);
  _carritoService = inject(CarritoStateService);

  abrirCerrarSesion() {
    this.showCerrarSesion = true;
    document.body.classList.add('overflow-hidden'); // evita scroll del fondo
  }

  cancelarCierre() {
    this.showCerrarSesion = false;
    document.body.classList.remove('overflow-hidden');
  }
  cerrar_Sesion() {
  this._authStateService.cerrarSesion().pipe(
    finalize(() => {
      document.body.classList.remove('overflow-hidden');
      this._carritoService.vaciarCarrito(); 
      this._router.navigateByUrl('/auth/login', { replaceUrl: true });
      
    })
  ).subscribe({
    next: (msg) => console.log(msg),
    error: (err) => console.error(err)
  });
}
}
