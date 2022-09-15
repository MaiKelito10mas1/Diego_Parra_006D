import { Component } from '@angular/core';
import { Clase } from './componentes/modelos/clase';
import { Historial } from '././componentes/modelos/historial';
import { Alumno } from './componentes/modelos/alumno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Prueba1';

  public listarSeccion: Array<Clase> = [{
    sigla: "A",
    id: 1,
    }
  ]

  public recibirRegistro(nuevoRegistro: Clase): void{
    this.listarSeccion.push(nuevoRegistro)
  }

  public listaHistorial: Array<Historial> = [
    {
      dia: 11,
      mes: 12,
      anno: 2001,
    }

  ]

  public escucharHistorial(nuevoHistorial: Historial): void{
    this.listaHistorial.push(nuevoHistorial)
  }

  public listaAlumno: Array<Alumno> = [
    {
      rut: 209368730,
      nombre: "Diego",
      apellido: "Parra",
      edad: 21,
    }
  ]

  public escucharAlumno(nuevoAlumno: Alumno): void {
    this.listaAlumno.push(nuevoAlumno)
  }
}
