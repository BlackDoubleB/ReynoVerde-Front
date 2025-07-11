import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { catchError, Observable, of } from 'rxjs';
import { Producto } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServiceDashboardService {
  private _http = inject(HttpClient);
  private URLbase = environment.apiURL ;


  obtenerTodoProducto(): Observable<Producto[]> {

  return this._http.get<Producto[]>(`${this.URLbase}/api/producto/obtenertodoproducto`, {
    withCredentials: true
  }).pipe(
    catchError(error => {
      console.error('Error obteniendo productos', error);
      return of([]);
    })
  );

}
}