import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginModel } from '../../../models/general/login';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/general/auth.service';
import { MenuPadre } from '../../../models/general/menuPadre';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { CrearCuentaComponent } from '../crear-cuenta/crear-cuenta.component';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Output() eventoSesion = new EventEmitter();
  public frmSesion: FormGroup;
  public objlogin: LoginModel;
  public vistas: string[] = [];
  returnUrl: string;
  constructor(
    public _login: AuthService,
    public formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    public router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.validaciones();
    this.returnUrl = this.route.snapshot.queryParams['home'] || '/';
  }

  iniciarSesion() {
    debugger;
    this.objlogin = this.frmSesion.value;
    // console.log(this.objlogin);

    this._login.logIn(this.objlogin).subscribe((res: any) => {


      if(res.length > 0){

        let user =JSON.stringify(res[0]) ;
        localStorage.setItem('user',user);
        localStorage.setItem('IsIdentity', 'true');
        this.eventoSesion.emit(true);
        this._snackBar.open('Bienvenido', 'Undo', {
          duration: 3000,
        });
      }else{

        this._snackBar.open('incorrecto', 'Undo', {
          duration: 3000,
        });
      }

      // console.log(res);

      // this.router.navigate([this.returnUrl]);

      // let vistas = JSON.parse(localStorage.getItem('vistas'));

      // vistas.forEach((itemPadre) => {
      //   if (itemPadre.children.length > 0) {
      //     itemPadre.children.forEach((itemMenuHijo) => {
      //       this.vistas.push(itemMenuHijo.displayName);
      //     });
      //   } else {
      //     this.vistas.push(itemPadre.displayName);
      //   }
      // });
      // localStorage.setItem('vistas2', JSON.stringify(this.vistas));


    });
  }

  validaciones() {
    this.frmSesion = this.formBuilder.group({
      user: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(5),Validators.email
      ]),
      password: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  crearCuenta() {
    const dialogComponent = new MatDialogConfig();
    dialogComponent.autoFocus = true;
    dialogComponent.disableClose = true;
    // dialogComponent.data = { tarea };
    const dialogRef = this.dialog.open(CrearCuentaComponent, dialogComponent);
    dialogRef.disableClose = true;
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this._snackBar.open('Cuenta creada', 'Undo', {
          duration: 3000,
        });
      }
    });
  }
}
