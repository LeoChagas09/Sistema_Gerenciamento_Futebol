import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Campeonato, ListarCampeonato } from 'src/app/interfaces';
import { CampeonatoService } from 'src/app/services/campeonato/campeonato.service';
import { CriarCampeonatosComponent } from '../criar-campeonatos/criar-campeonatos.component';

@Component({
  selector: 'app-listar-campeonatos',
  templateUrl: './listar-campeonatos.component.html',
  styleUrls: ['./listar-campeonatos.component.css']
})
export class ListarCampeonatosComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['Tipo', 'Nome', 'Data', 'Local', 'botao'];
  dataSource: Campeonato[] = [];

  subscriptions: Subscription = new Subscription();

  constructor(
    public campeonatoService: CampeonatoService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.campeonatoService.getCampeonatos('http://localhost:3333/campeonato/').subscribe({
      next: retorno => (this.dataSource = retorno.campeonato),
      error: erro => (console.error(erro)),
    }))
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  openDialog(): void {
    this.dialog.open(CriarCampeonatosComponent, {
      width: '600px',
    });
  }

}
