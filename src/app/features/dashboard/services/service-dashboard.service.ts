import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { catchError, Observable, of } from 'rxjs';
import { Categoria, Producto } from '../../../interfaces';

@Injectable({
  providedIn: 'root',
})

export class ServiceDashboardService {
  private _http = inject(HttpClient);
  private URLbase = environment.apiURL;

  ObtenerTodaCategoria(): Observable<Categoria[]> {
    return this._http
      .get<Categoria[]>(`${this.URLbase}/api/categoria/ObtenerTodaCategoria`, {
        withCredentials: true,
      })
      .pipe(
        catchError((error) => {
          console.error('Error obteniendo categorias', error);
          return of([]);
        })
      );
  }

obtenerProductoFiltrado(
  categorias: string[] = [],
  nombre: string | null = null
): Observable<Producto[]> {
  let params = new HttpParams();
  
  if (categorias.length > 0) {
    // Para enviar múltiples valores de categoría (array)
    categorias.forEach(cat => {
      params = params.append('categoria', cat);
    });
  }

  if (nombre) {
    params = params.append('nombre', nombre);
  }

  return this._http.get<Producto[]>
  ( `${this.URLbase}/api/producto/obtenerProductosFiltrados`,
    { params, withCredentials: true }
  ).pipe(
    catchError(error => {
      console.error('Error obteniendo productos filtrados', error);
      return of([]);
    })
  );
}

obtenerProductosPrincipales():Observable<Producto[]>{
  return this._http.get<Producto[]>
  ( `${this.URLbase}/api/producto/obtenerProductosPrincipales`,
    { withCredentials: true }
  ).pipe(
    catchError(error => {
      console.error('Error obteniendo productos', error);
      return of([]);
    })
  );

}
}
