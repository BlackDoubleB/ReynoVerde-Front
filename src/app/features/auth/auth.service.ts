import { inject, Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { IniciarSesion, RegistrarUsuario } from './account.interface';
import { catchError, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  private http = inject(HttpClient);
  private URLbase = environment.apiURL;

  public registrarUsuario(
    usuario: RegistrarUsuario
  ): Observable<RegistrarUsuario> {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //   }),
    // };
    return this.http.post<RegistrarUsuario>(this.URLbase+ '/register', usuario);
  }

  public iniciarSesion(
    usuario: IniciarSesion
  ): Observable<IniciarSesion> {
    const httpOptions = {
      // headers: new HttpHeaders({
      //   'Content-Type': 'application/json',
      // }),
      withCredentials: true 
      
    };
    return this.http.post<IniciarSesion>(`${this.URLbase}/login?useCookies=true`, usuario, httpOptions);
  }
}
