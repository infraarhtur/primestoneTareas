import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';

import { tareaInterface } from '../../../../models/negocio/Itareas';
import { TareasService } from '../../../../services/tareas/tareas.service';
import { tareaModel } from '../../../../models/negocio/tareaModel';

@Component({
  selector: 'app-agregar-dialogo',
  templateUrl: './agregar-dialogo.component.html',
  styleUrls: ['./agregar-dialogo.component.scss']
})
export class AgregarDialogoComponent implements OnInit {
  formAgregarTarea: FormGroup;
  enviar: any;
  tareaSeleccionada: tareaInterface;
  description = 'Agregar tarea';
  constructor(
    private _builders: FormBuilder,
    private _tareaService:TareasService,
    public dialogRef: MatDialogRef<AgregarDialogoComponent>,
    @Inject(MAT_DIALOG_DATA) public dataSource: any

    ) {
      // this.tareaSeleccionada = this.dataSource.tarea;
      this.agregarFormGroup();

    }

  ngOnInit(): void {

  }
  agregarTarea() {
    debugger;
    if(this.formAgregarTarea.valid){
  debugger;
      this.enviar = this.formAgregarTarea.value;

      this.tareaSeleccionada = new tareaModel(this.formAgregarTarea.controls.titulo.value,this.formAgregarTarea.controls.descripcion.value );


        this._tareaService.agregarTarea(this.tareaSeleccionada).subscribe(tareaAgregada => {
          console.log('tarea editada',tareaAgregada)
          this.cerrar();
        });

    }



  }

  agregarFormGroup() {
    this.formAgregarTarea = this._builders.group({
      // id: [{value: '', disabled: true}],
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
    this.dialogRef.close(this.formAgregarTarea.value);
    this.formAgregarTarea.reset();
  }

}
