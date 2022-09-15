import { Component, Input } from '@angular/core';
import { AlumnoComponent } from './../alumno/alumno.component'
import { Alumno } from '../modelos/alumno';
import { ParsedVariable } from '@angular/compiler';

@Component({
  selector: 'app-listar-alumno',
  templateUrl: './listar-alumno.component.html',
  styleUrls: ['./listar-alumno.component.scss']
})
export class ListarAlumnoComponent  {
  @Input() public alumnos: Array<Alumno> = [
    {
      rut: 209368730,
      nombre: "Diego",
      apellido: "Parra",
      edad: 1,
    }
  ]

  }


