import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClimaServiceService {
  constructor() {}
  private http = inject(HttpClient);
  private URLbase = environment.apiURL + '/weatherforecast';

  public obtenerClima() {
    const httpOptions = {
      withCredentials: true,
    };
    return this.http.get<any[]>(this.URLbase, httpOptions);
  }
}
