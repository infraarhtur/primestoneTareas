import { cuentaInterface } from './cuentaInterface';
export class CuentaModel implements cuentaInterface {

  id?: number;
  nombre: string;
  apellido: string;
  user: string;
  password: string;
  role: string;
  token?: string
constructor(nombre:string, apellido:string,usuario:string, password:string){
this.id = Math.random();
this.nombre = nombre;
this.apellido = apellido;
this.user = usuario;
this.role='admin',
this.password = password,
this.token ='eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIyMDYiLCJzdWIiOiJBZG1pbiIsImF1ZCI6IjE3Mi4xNy41Ljk4IiwiaWF0IjoxNTgxMDA3MzI3LCJleHAiOjE1ODEwMDgyMjd9.zez3wI5TLxzqIuoU1SxTiyhOHXwV2-IGFqlAQbO8KpF8lS093v2TrXnV4zD6ziwXtuzw2S7EaeMLc7cZyQLo1A'

}
}
