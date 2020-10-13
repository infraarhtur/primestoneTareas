import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeadersInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      'token-usuario':
        'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIyMDYiLCJzdWIiOiJBZG1pbiIsImF1ZCI6IjE3Mi4xNy41Ljk4IiwiaWF0IjoxNTgxMDA3MzI3LCJleHAiOjE1ODEwMDgyMjd9.zez3wI5TLxzqIuoU1SxTiyhOHXwV2-IGFqlAQbO8KpF8lS093v2TrXnV4zD6ziwXtuzw2S7EaeMLc7cZyQLo1A',

        'Content-Type': 'application/jsonCamiloS0ler; charset=UTF-8',

        'Errores-Manejo-Manual': 'true'
    });

    const reqClone = req.clone({
      // headers,
    });

    return next.handle(reqClone).pipe(
      catchError(this.manejarErrores)
    );
  }

  manejarErrores(error: HttpErrorResponse) {
    console.log('Sucedio un error');
    return throwError('erro personalizado')

  }
}
