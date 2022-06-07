import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  nome: string;
  tipo: string;
  data: string;
  local: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {tipo: 'Eliminátoria', nome: 'Varzeano 2022', data: '22/10/2022', local: 'Assis' },
  {tipo: 'Eliminátoria', nome: 'Interclasse', data: '07/10/2022', local: 'Palmital'},
  {tipo: 'Eliminátoria', nome: 'Copa Fema', data: '27/04/2022', local: 'Assis'},
];

@Component({
  selector: 'app-listar-campeonatos',
  templateUrl: './listar-campeonatos.component.html',
  styleUrls: ['./listar-campeonatos.component.css']
})
export class ListarCampeonatosComponent implements OnInit {
  displayedColumns: string[] = ['Tipo', 'Nome', 'Data', 'Local', 'botao'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {


  }

}
