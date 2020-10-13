import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';

import { LoginModel } from '../../models/general/login';
import 'rxjs/add/observable/throw';
import { environment } from '../../../environments/environment';
import { cuentaInterface } from '../../models/general/cuentaInterface';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {
  public urlBase = '';
  constructor(private http: HttpClient) {
    this.urlBase = environment.urlBaseServicio;
  }



  crearCuenta(cuenta: cuentaInterface) {

    const url = `${this.urlBase}/login`;
    return this.http.post(url,cuenta);
  }

}
