import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { CategoriaI } from '../categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriaServiceService {

   constructor() {}
  private http = inject(HttpClient);
  private URLbase = environment.apiURL;

  public registrarCategoria(categoria: CategoriaI): Observable<CategoriaI> {
    const httpOptions = {
      withCredentials: true  
    };

    return this.http.post<CategoriaI>(this.URLbase+ '/api/categoria/crearcategoria', categoria, httpOptions);
  }
}
