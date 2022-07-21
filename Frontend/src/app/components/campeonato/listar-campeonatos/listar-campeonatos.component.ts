import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Subscription } from 'rxjs';
import { Campeonato } from 'src/app/interfaces';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CampeonatoService } from 'src/app/services/campeonato/campeonato.service';
import { CriarCampeonatosComponent } from '../criar-campeonatos/criar-campeonatos.component';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listar-campeonatos',
  templateUrl: './listar-campeonatos.component.html',
  styleUrls: ['./listar-campeonatos.component.css']
})
export class ListarCampeonatosComponent implements OnInit, OnDestroy, AfterViewInit  {

  displayedColumns: string[] = ['nome', 'data_inicio', 'data_final', 'tipo', 'times' , 'jogo'];
  dataSource = new MatTableDataSource<Campeonato>();

  idUser = Number(this.authService.getPayloadJWT()?.id_usuario);

  id: any;

  subscriptions: Subscription = new Subscription();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    public campeonatoService: CampeonatoService,
    public dialog: MatDialog,
    private router: Router,
    private authService: AuthService,
    private toast: NgToastService,
    ) { }

  ngOnInit(): void {
    this.listaCampeonatos();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  openDialog(): void {
    const dialog = this.dialog.open(CriarCampeonatosComponent, {
      disableClose: true,
      width: '600px',
      data: {idUser: this.idUser}
    });
    dialog.afterClosed().subscribe(result => {
      if(!result.error) {
        this.listaCampeonatos();
      }
    })

  }

  listaCampeonatos(){
    this.subscriptions.add(
      this.campeonatoService.getCampeonatosUser(this.idUser).subscribe({
      next: retorno => (this.dataSource.data = retorno),
      error: erro => (console.error(erro)),
    }));
  }

  RedirectTimes(status: number, id: number) {
    if(status == 0) {
      this.router.navigate([`/times/campeonato/${id}`]);
    } else if(status == 1) {
      this.toast.error({detail: 'Times já cadastrados', summary: 'Não é possível cadastrar mais times' , duration: 5000});
    }
  }

  RedirectJogo(status: number) {
    if(status == 0) {
      this.toast.error({detail: 'Falta finalizar os cadastros de times', summary: 'Não é possível acessar os jogos' , duration: 5000});
    } else if(status == 1 || status == 2) {
      this.router.navigate(['/jogos']);
    }
  }

  doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  filtrar(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
