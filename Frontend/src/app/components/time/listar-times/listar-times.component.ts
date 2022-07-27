import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CampeonatoService } from 'src/app/services/campeonato/campeonato.service';
import { ExporterService } from 'src/app/services/Export/exporter.service';
import { TimesService } from 'src/app/services/jogo/times.service';
import { CriarTimesComponent } from '../criar-times/criar-times.component';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-listar-times',
  templateUrl: './listar-times.component.html',
  styleUrls: ['./listar-times.component.css']
})
export class ListarTimesComponent implements OnInit {

  displayedColumns: string[] = ['nome'];
  dataSource = new MatTableDataSource<any>();

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
    public dialog: MatDialog,
    private router: Router,
    private authService: AuthService,
    private toast: NgToastService,
    private timesService: TimesService,
    private route: ActivatedRoute,
    private campeonatoService: CampeonatoService,
    private excelService: ExporterService,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.listarTimes();
  }

  listarTimes(){
    this.subscriptions.add(
      this.timesService.getTimes(this.id).subscribe({
      next: retorno => (this.dataSource.data = retorno),
      error: erro => (console.error(erro)),
    }));
  }

  openDialog(): void {
    const dialog = this.dialog.open(CriarTimesComponent, {
      disableClose: true,
      width: '600px',
      data: {idUser: this.idUser, id: this.id}
    });
    dialog.afterClosed().subscribe(result => {
      if(!result.error) {
        this.listarTimes();
      }
    })
  }

  Finish(id: number) {
    this.campeonatoService.updateCampeonatos(id).subscribe({
      next: retorno => (retorno.campeonato, this.router.navigate(['/campeonatos'])),
      error: erro => (this.toast.error({
        detail: 'Não é possivel finalizar cadastro', summary: 'Qtde. de times não pode ser ímpares' , duration: 8000
      })),
    });
  }

  voltar() {
    this.router.navigate(['/campeonatos']);
  }

  filtrar(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  exportExcel(){
    // this.excelService.exportExcel(this.dataSource.data, 'times');

    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Times');

    XLSX.writeFile(wb, 'Times.xlsx');
  }

}
