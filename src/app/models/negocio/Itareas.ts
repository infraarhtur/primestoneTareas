import { estadoType } from "./estado.type";

export interface tareaInterface {
id:number;
  titulo:string;
  descripcion:string;
  estado:estadoType;
  usuario:string;
}
