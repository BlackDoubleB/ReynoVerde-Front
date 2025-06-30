import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})


export class AuthStateService {
  
  private _http = inject(HttpClient);
  private URLbase = environment.apiURL + '/api/auth/acceso-valido';


  acceso(): Observable<boolean> {
    const httpOptions = {
      withCredentials: true,
    };
    return this._http.get<AccesoRespuesta>(this.URLbase, httpOptions).pipe(map(res=> res.valido));
    
  }
}
interface AccesoRespuesta {
  valido: boolean;
}



