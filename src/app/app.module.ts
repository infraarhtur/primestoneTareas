import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing';

//#region modules
import { AgmCoreModule } from '@agm/core';
import { MaterialModule } from '../app/general/material/material.module';


//#endregion



//#region components
import { MainComponent } from './general/components/main/main.component';
import { HomeComponent } from './general/components/home/home.component';
import { LoginComponent } from './general/components/login/login.component';

import { MenuListItemsComponent } from './general/components/menu-list-items/menu-list-items.component';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
import { httpInterceptorProviders } from '../app/interceptor/index';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { from } from 'rxjs';
import { TareaModule } from './modulos/tarea/tarea.module';
import { CrearCuentaComponent } from './general/components/crear-cuenta/crear-cuenta.component';

//#region

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    HomeComponent,
    MenuListItemsComponent,
    CrearCuentaComponent,


  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    AppRoutingModule,
    FontAwesomeModule,
    MaterialModule,
    ReactiveFormsModule,
  TareaModule



  ],
  providers: [
    httpInterceptorProviders,

    MaterialModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
