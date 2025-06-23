import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  private _http = inject(HttpClient);
  private URLbase = environment.apiURL + '/api/auth/acceso-valido';


  acceso() {
    const httpOptions = {
      withCredentials: true,
    };
    return this._http.get<any[]>(this.URLbase, httpOptions);
  }
}
