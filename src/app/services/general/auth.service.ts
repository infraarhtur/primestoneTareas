import { Injectable } from '@angular/core';
import { LoginModel } from 'src/app/models/general/login';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public urlBase = '';
  constructor(private _http: HttpClient) {
    this.urlBase = environment.urlBaseServicio;
  }

   logIn(credenciales: LoginModel) {


    const url = `${this.urlBase}/login?user=${credenciales.user}&password=${credenciales.password}`;
    debugger;
    return this._http.get<LoginModel>(url);
  }

  isLoggedIn(): boolean {
    let sesion = localStorage.getItem('IsIdentity');

    if (sesion == 'true') {
      return true;
    }

    return false;
  }
}
