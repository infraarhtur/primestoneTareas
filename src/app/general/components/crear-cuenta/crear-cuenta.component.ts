import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';


import { CuentaService } from '../../../services/general/cuenta.service';
import { CuentaModel } from '../../../models/general/cuentaModel';
import { cuentaInterface } from '../../../models/general/cuentaInterface';
import { Users } from '../../../models/negocio/users';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.scss']
})
export class CrearCuentaComponent implements OnInit {
    formCrearCuenta: FormGroup;
  enviar: any;
  cuenta: cuentaInterface;
  description = 'Crear cuenta';
  constructor(
    private _builders: FormBuilder,
    private _cuentaService: CuentaService,
    public dialogRef: MatDialogRef<CrearCuentaComponent>,
    @Inject(MAT_DIALOG_DATA) public dataSource: any

  ) {

    this.agregarFormGroup();

  }

  ngOnInit(): void {

  }

  crearCuenta() {
    if(this.formCrearCuenta.valid){
      this.cuenta = new CuentaModel(this.formCrearCuenta.controls.nombre.value,this.formCrearCuenta.controls.apellido.value,this.formCrearCuenta.controls.user.value,this.formCrearCuenta.controls.password.value);
      debugger;
this._cuentaService.crearCuenta( this.cuenta ).subscribe(res=> {
  debugger;
console.log('cuenta creada');

})
    }
  }



  agregarFormGroup() {
    this.formCrearCuenta = this._builders.group({
      // id: [{value: '', disabled: true}],
      nombre: ['',
        Validators.required,
      ],
      apellido: ['',
        Validators.required,
      ],
      user: ['',
       [Validators.required, Validators.email]
      ],
      password: ['',
      [Validators.required, Validators.minLength(6)]
     ]

    });
  }

  // tslint:disable-next-line: typedef
  cerrar() {
    this.dialogRef.close(this.formCrearCuenta.value);
    this.formCrearCuenta.reset();
  }




}
