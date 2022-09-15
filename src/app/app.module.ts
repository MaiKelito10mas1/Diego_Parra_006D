import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClaseComponent } from './componentes/clase/clase.component';
import { FormularioAlumnoComponent } from './componentes/formulario-alumno/formulario-alumno.component';
import { HistorialComponent } from './componentes/historial/historial.component';
import { ContadorComponent } from './componentes/contador/contador.component';
import { ListarHistorialComponent } from './componentes/listar-historial/listar-historial.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { ListarAlumnoComponent } from './componentes/listar-alumno/listar-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    ClaseComponent,
    FormularioAlumnoComponent,
    HistorialComponent,
    ContadorComponent,
    ListarHistorialComponent,
    AlumnoComponent,
    ListarAlumnoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
