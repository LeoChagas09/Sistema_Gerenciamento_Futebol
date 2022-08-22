import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Jogo, jogoResultado } from 'src/app/interfaces';
import { ExporterService } from 'src/app/services/Export/exporter.service';
import { JogosService } from 'src/app/services/jogo/jogos.service';
import * as XLSX from 'xlsx';
import { CriarResultadoJogoComponent } from '../criar-resultado-jogo/criar-resultado-jogo.component';

@Component({
  selector: 'app-listar-jogos',
  templateUrl: './listar-jogos.component.html',
  styleUrls: ['./listar-jogos.component.css']
})
export class ListarJogosComponent implements OnInit, OnDestroy, AfterViewInit {

  displayedColumns: string[] = ['time1', 'placarTime1', 'placarTime2', 'time2', 'data_ida', 'local_ida', 'data_volta' , 'local_volta', 'resultado'];
  dataSource = new MatTableDataSource<Jogo>();

  @ViewChild('TABLE', { read: ElementRef }) table!: ElementRef;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  subscriptions: Subscription = new Subscription();

  id: any;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    private jogosService: JogosService,
    private excelService: ExporterService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.listaJogos();
  }


  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  listaJogos(){
    this.subscriptions.add(
      this.jogosService.getJogos(this.id).subscribe({
        next: retorno => (this.dataSource.data = retorno),
        error: erro => (console.error(erro)),
      }),
    );
  }

  filtrar(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  exportExcel(){
    // this.excelService.exportExcel(this.dataSource.data, 'jogos');

    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Jogos');

    XLSX.writeFile(wb, 'Jogos.xlsx');
  }

  criarResultado(id_jogo: number): void {
    const idJogo = id_jogo;

    const dialog = this.dialog.open(CriarResultadoJogoComponent, {
      disableClose: true,
      width: '600px',
      data: {idJogo: idJogo}
    });
    dialog.afterClosed().subscribe(result => {
      if(!result.error) {
        this.listaJogos();
      }
    })
  }

}
