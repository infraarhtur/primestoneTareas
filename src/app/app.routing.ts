import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//#region Componentes
import { HomeComponent } from './general/components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/general/auth.service';
import { LoginComponent } from './general/components/login/login.component';

//#endregion Componentes

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent,
    canActivate: [
    AuthGuard
  ],

  },

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },

  {
    path: 'login',
    component: LoginComponent,

  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
  providers: [AuthService],
})
export class AppRoutingModule {}
