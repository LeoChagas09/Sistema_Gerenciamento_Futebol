import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Subscription } from 'rxjs';
import { Campeonato, CampeonatoTeste } from 'src/app/interfaces';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CampeonatoService } from 'src/app/services/campeonato/campeonato.service';
import { CriarCampeonatosComponent } from '../criar-campeonatos/criar-campeonatos.component';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ExporterService } from 'src/app/services/Export/exporter.service';
import * as XLSX from 'xlsx';

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

  @ViewChild('TABLE', { read: ElementRef }) table!: ElementRef;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    private campeonatoService: CampeonatoService,
    private excelService: ExporterService,
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
      }),
    );
  }

  RedirectTimes( id: number) {
    this.router.navigate([`/times/campeonato/${id}`]);
  }

  RedirectJogo() {
    this.router.navigate(['/jogos']);
  }

  filtrar(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  exportExcel(){
    this.excelService.exportExcel(this.dataSource.data, 'campeonatos');

    // const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);
    // const wb: XLSX.WorkBook = XLSX.utils.book_new();
    // XLSX.utils.book_append_sheet(wb, ws, 'Campeonatos');

    // XLSX.writeFile(wb, 'Campeonatos.xlsx');
  }

}
