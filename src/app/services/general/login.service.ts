import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';

import { LoginModel } from '../../models/general/login';
import 'rxjs/add/observable/throw';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public urlBase = '';

  constructor(private http: HttpClient) {
    this.urlBase = environment.urlBaseServicio;
  }

  logIn(credencialesUsuario: LoginModel) {
    var login = {
      password: credencialesUsuario.user,
      userName: credencialesUsuario.password,
    };
    const url = `${this.urlBase}/login?user=${login.userName}&password=${login.password}`;
    return this.http.get<LoginModel>(url);
  }
}
