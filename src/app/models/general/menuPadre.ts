import {MenuHijo} from './menuHijo'

export class MenuPadre {
  public displayName: string;
  public iconName: string;
  public route: string;
  public children: MenuHijo[];
}
