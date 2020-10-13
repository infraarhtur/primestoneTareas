import { tareaInterface } from './Itareas';
import { estadoType } from './estado.type';
export class tareaModel implements tareaInterface {

  id: number;
  titulo: string;
  descripcion: string;
  estado: estadoType;
  usuario: string;

  constructor(titulo: string, descrip: string) {
    this.id = Math.random();
    this.estado = "to Do";
    this.descripcion = descrip;
    this.titulo = titulo;
    let objUsuario =JSON.parse(localStorage.getItem('user')) ;
    this.usuario = objUsuario.user;
  }
}
