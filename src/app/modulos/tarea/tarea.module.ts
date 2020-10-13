import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainComponent } from './components/main/main.component';
import { TareasRoutingModule } from './tarea-routing.module';
import { MaterialModule } from 'src/app/general/material/material.module';
import { EliminarComponent } from './components/eliminar/eliminar.component';
import { EditarDialogComponent } from './components/editar-dialogo/editar-dialogo.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AgregarDialogoComponent } from './components/agregar-dialogo/agregar-dialogo.component';



@NgModule({
  declarations: [DashboardComponent, MainComponent, EliminarComponent, EditarDialogComponent, AgregarDialogoComponent],
  imports: [
    CommonModule,
    TareasRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class TareaModule { }
