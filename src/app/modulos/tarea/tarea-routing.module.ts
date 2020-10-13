import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/app/guards/auth.guard';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'Tareas', component: MainComponent,
    canActivate: [

      AuthGuard
    ],
    // canActivateChild: [
    //   LoginGuard,
    //   AuthGuard
    // ],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent},

    ]
  }

];

@NgModule({
  imports: [

    RouterModule.forChild(routes)

  ],
  exports: [RouterModule]
})
export class TareasRoutingModule { }
