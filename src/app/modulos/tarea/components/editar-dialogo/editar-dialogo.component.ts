import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';


import { tareaInterface } from '../../../../models/negocio/Itareas';
import { TareasService } from '../../../../services/tareas/tareas.service';

@Component({
  selector: 'app-agregar-dialog',
  templateUrl: './editar-dialogo.component.html',
  styleUrls: ['./editar-dialogo.component.scss']
})
export class EditarDialogComponent implements OnInit {
  formEditarTarea: FormGroup;
  enviar: any;
  tareaSeleccionada: tareaInterface;
  description = 'Editar tarea';
  constructor(
    private _builders: FormBuilder,
    private _tareaService:TareasService,
    public dialogRef: MatDialogRef<EditarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dataSource: any

    ) {
      this.tareaSeleccionada = this.dataSource.tarea;
      this.updateFormGroup();
      this.cargarData();
    }

    ngOnInit(): void {

  }
 // tslint:disable-next-line: typedef
 cargarData(){
  this.formEditarTarea.patchValue({
    id: this.tareaSeleccionada.id,
    titulo : this.tareaSeleccionada.titulo,
    descripcion: this.tareaSeleccionada.descripcion
    // email: this.usuarioSeleccionado.email
  });
}

// tslint:disable-next-line: typedef
actualizarTarea() {
  if(this.formEditarTarea.valid){
debugger;
    this.enviar = this.formEditarTarea.value;
    this.tareaSeleccionada.titulo = this.formEditarTarea.get('titulo').value;
    this.tareaSeleccionada.descripcion = this.formEditarTarea.get('descripcion').value;
      this._tareaService.editartarea(this.tareaSeleccionada).subscribe(tareaEditada => {

        this.cerrar();
      });

  }



}

updateFormGroup() {
  this.formEditarTarea = this._builders.group({
    id: [{value: '', disabled: true}],
    titulo: ['',
      Validators.required,
    ],
    descripcion: ['',
      Validators.required,
    ]

  });
}

// tslint:disable-next-line: typedef
cerrar() {
  this.dialogRef.close(this.formEditarTarea.value);
  this.formEditarTarea.reset();
}

}


