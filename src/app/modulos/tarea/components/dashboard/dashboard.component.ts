import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { tareaModel } from '../../../../models/negocio/tareaModel';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { tareaInterface } from '../../../../models/negocio/Itareas';
import { TareasService } from '../../../../services/tareas/tareas.service';
import { MatIconRegistry } from '@angular/material/icon';
import { EliminarComponent } from '../eliminar/eliminar.component';
import { EditarDialogComponent } from '../editar-dialogo/editar-dialogo.component';
import { AgregarDialogoComponent } from '../agregar-dialogo/agregar-dialogo.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tareas: tareaInterface[] = [];

  todo: tareaInterface[] = [];

  done: tareaInterface[] = [];

  progress: tareaInterface[] = [];




  constructor(private tareasService: TareasService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
   ) {

  }

  ngOnInit(): void {
   this. obtenerTareas();
  }

  obtenerTareas(){
    this.tareasService.obtenerTareasPorUsuario().subscribe(items => {
      this.tareas = items;
      this.todo=[];
      this.done=[];
      this.progress=[];
      this.distribuirTareas();
    });
  }
  drop(event: CdkDragDrop<tareaInterface[]>) {

    if (event.previousContainer === event.container) {
      debugger;
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      debugger;

      event.previousContainer.data = this.cambioEstado(event.container.id, event.previousContainer.data, event.previousIndex);
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);


    }
  }



  cambioEstado(idContainer: string, tareas, index) {
    debugger;
    let contador = 0;


    tareas.forEach((item) => {

      if (contador == index) {
        switch (idContainer) {
          case 'cdk-drop-list-0': {

            item.estado = 'to Do';
            this.tareasService.editarEstadotarea(item.id, item.estado).subscribe(tarea => {
              this._snackBar.open('estado editado', 'ok', {
                duration: 1000,
                horizontalPosition: 'center',
                verticalPosition: 'top'
              });
            }

            )
            //statements;
            break;
          }
          case 'cdk-drop-list-1': {
            item.estado = 'in progress';
            this.tareasService.editarEstadotarea(item.id, item.estado).subscribe(tarea => {
              this._snackBar.open('estado editado', 'ok', {
                duration: 1000,
                horizontalPosition: 'center',
                verticalPosition: 'top'
              });
            })
            break;
          }
          default: {
            item.estado = 'done';
            this.tareasService.editarEstadotarea(item.id, item.estado).subscribe(tarea => {
              this._snackBar.open('estado editado', 'ok', {
                duration: 1000,
                horizontalPosition: 'center',
                verticalPosition: 'top'
              });
            })
            //statements;
            break;
          }
        }
      }
      contador++;
    });




    return tareas;
  }

  mostrar() {

    console.log('todo', JSON.stringify(this.todo));
    console.log('progress', JSON.stringify(this.progress));
    console.log('done', JSON.stringify(this.done));
  }

  distribuirTareas() {
    this.tareas.map(item => {

      if (item.estado == 'to Do') {
        this.todo.push(item);
      } else if (item.estado == 'in progress') {
        this.progress.push(item);
      } else if (item.estado == 'done') {
        this.done.push(item);
      }

    })
  }


  abrirModalDelete(tarea: tareaInterface) {
    const dialogComponent = new MatDialogConfig();
    dialogComponent.autoFocus = true;
    dialogComponent.disableClose = true;
    dialogComponent.data = { tarea };
    const dialogRef = this.dialog.open(EliminarComponent, dialogComponent);
    dialogRef.disableClose = true;
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.borrarTarea(tarea);
      }
    });
  }
  borrarTarea(tarea: tareaInterface) {

    this.tareasService.eliminarTarea(tarea.id).subscribe(resp => {
      this._snackBar.open('Tarea eliminada', 'ok', {
        duration: 1000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
    });
    let contador = 0;
    this.tareas.forEach(item => {

      if (item.id == tarea.id) {
        this.tareas.slice(contador, 1);
      }
      contador++;
    })
    debugger
    switch (tarea.estado) {
      case 'to Do': {
        let index = this.todo.indexOf(tarea);

        this.todo.splice(index, 1);

        //statements;
        break;
      }
      case 'in progress': {
        let index = this.progress.indexOf(tarea);

        this.progress.splice(index, 1);

        break;
      }
      default: {
        let index = this.done.indexOf(tarea);

        this.done.splice(index, 1);
        //statements;
        break;
      }
    }

  }

  abrirModalEditar(tarea: tareaInterface) {
    const dialogComponent = new MatDialogConfig();
    dialogComponent.autoFocus = true;
    dialogComponent.disableClose = true;
    dialogComponent.data = { tarea };
    const dialogRef = this.dialog.open(EditarDialogComponent, dialogComponent);
    dialogRef.disableClose = true;
    dialogRef.afterClosed().subscribe(result => {

      if (result === 1) {
        this. obtenerTareas();
        this._snackBar.open('tarea editada', 'ok', {
          duration: 1000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });

      }
    });
  }

  abrirModalAgregar(){

    const dialogComponent = new MatDialogConfig();
    dialogComponent.autoFocus = true;
    dialogComponent.disableClose = true;
    //  dialogComponent.data = { tarea };
    const dialogRef = this.dialog.open(AgregarDialogoComponent, dialogComponent);
    dialogRef.disableClose = true;
    dialogRef.afterClosed().subscribe(result => {
      this. obtenerTareas();
      this._snackBar.open('tarea creada', 'ok', {
        duration: 1000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
//       if (result !== undefined) {
//         debugger
// this.todo.push(result);
//         this. obtenerTareas();
//        }
    });

  }
}
