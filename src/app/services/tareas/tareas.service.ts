import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../src/environments/environment';
// import { tareaInterface } from '../../../models/negocio/Itareas';
// import { estadoType } from '../../../models/negocio/estado.type';
import { tareaInterface } from '../../models/negocio/Itareas';
import { estadoType } from '../../models/negocio/estado.type';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  public urlBase = '';
  constructor(private http: HttpClient) {
    this.urlBase = environment.urlBaseServicio;
  }

  obtenerTareasPorUsuario(){
    let objCuenta = JSON.parse(localStorage.getItem('user'))
    const url = `${this.urlBase}/tareas?usuario=${objCuenta.user}`;
    return this.http.get<tareaInterface[]>(url);

  }

  editarEstadotarea(idtarea:number, estadoTarea:estadoType){
    const url = `${this.urlBase}/tareas/${idtarea}`;
    let tarea = {
      estado : estadoTarea.toString()
    }
    return this.http.patch(url,tarea);

  }
  eliminarTarea(idtarea:number){
    const url = `${this.urlBase}/tareas/${idtarea}`;
    return this.http.delete(url);
  }

  editartarea(tarea:tareaInterface){
    const url = `${this.urlBase}/tareas/${tarea.id}`;
    let objOarea = {
      titulo : tarea.titulo,
      descripcion:tarea.descripcion
    }
    return this.http.patch(url,objOarea);

  }

 agregarTarea(tarea:tareaInterface){
    const url = `${this.urlBase}/tareas/`;
    return this.http.post(url,tarea);

  }


}
