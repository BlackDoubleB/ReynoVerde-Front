import { inject, Injectable } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { IniciarSesion, RegistrarUsuario } from './account.interface';
import {  Observable } from 'rxjs';
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
    return this.http.post<RegistrarUsuario>(
      this.URLbase + '/register',
      usuario
    );
  }

  public iniciarSesion(usuario: IniciarSesion): Observable<IniciarSesion> {
    const httpOptions = {
      withCredentials: true,
    };
    return this.http.post<IniciarSesion>(
      `${this.URLbase}/login?useCookies=true`,
      usuario,
      httpOptions
    );
  }
}
