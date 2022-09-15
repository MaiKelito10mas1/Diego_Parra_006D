import { Component, Input } from '@angular/core';
import { HistorialComponent } from '../historial/historial.component';
import { Historial } from './../modelos/historial'

@Component({
  selector: 'app-listar-historial',
  templateUrl: './listar-historial.component.html',
  styleUrls: ['./listar-historial.component.scss']
})
export class ListarHistorialComponent {
  @Input() public historials!: Array<Historial>;

}
