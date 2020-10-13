import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TareasService } from '../../../../services/tareas/tareas.service';
import { tareaInterface } from '../../../../models/negocio/Itareas';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {
  form: FormGroup;
  titulo = 'Eliminar tarea';
  tareaSeleccionada: tareaInterface;
  constructor(
    private _tareasService: TareasService,
    public dialogRef: MatDialogRef<EliminarComponent>,
    @Inject(MAT_DIALOG_DATA) public dataSource: any
  ) {

    this.tareaSeleccionada = dataSource.tarea;

  }

  ngOnInit(): void {
  }
  borrarTarea(){

  }

}
