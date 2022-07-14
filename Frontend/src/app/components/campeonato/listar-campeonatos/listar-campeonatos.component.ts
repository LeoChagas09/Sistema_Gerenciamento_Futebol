import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Campeonato } from 'src/app/interfaces';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CampeonatoService } from 'src/app/services/campeonato/campeonato.service';
import { CriarCampeonatosComponent } from '../criar-campeonatos/criar-campeonatos.component';

@Component({
  selector: 'app-listar-campeonatos',
  templateUrl: './listar-campeonatos.component.html',
  styleUrls: ['./listar-campeonatos.component.css']
})
export class ListarCampeonatosComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['Tipo', 'Nome', 'Data', 'Local', 'jogo'];
  dataSource: Campeonato[] = [];

  idUser = Number(this.authService.getPayloadJWT()?.id_usuario);

  subscriptions: Subscription = new Subscription();

  constructor(
    public campeonatoService: CampeonatoService,
    public dialog: MatDialog,
    private router: Router,
    private authService: AuthService,
    ) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.campeonatoService.getCampeonatosUser(this.idUser).subscribe({
      next: retorno => (this.dataSource = retorno),
      error: erro => (console.error(erro)),
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  openDialog(): void {
    this.dialog.open(CriarCampeonatosComponent, {
      width: '600px',
      data: {idUser: this.idUser}
    });
  }

  editar(){
    this.router.navigate(['/editar']);
  }

}
