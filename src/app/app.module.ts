import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {CursosComponent} from './cursos/cursos.component';
//import { PersonaComponent } from './persona/persona.component';

@NgModule({ //decorador
  declarations: [
    AppComponent,
    CursosComponent //Componentes declarados
    //PersonaComponent
  ],
  imports: [
    BrowserModule //Modulos importados
  ],
  providers: [], //Servicios que necesita
  bootstrap: [AppComponent] // Se define el componente inicial
})
export class AppModule { }