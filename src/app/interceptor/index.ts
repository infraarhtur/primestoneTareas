import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Provider } from '@angular/core';

//#region interceptores
import { HeadersInterceptor } from './headersInterceptor';

//#endregion interceptores


/** Proveedores para interceptores HTTP en el orden del arreglo */
export const httpInterceptorProviders: Provider[] = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HeadersInterceptor,
    multi: true
  },

];
