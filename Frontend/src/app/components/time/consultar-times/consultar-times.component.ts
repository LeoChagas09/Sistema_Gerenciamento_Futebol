import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Time } from 'src/app/interfaces';
import { ExporterService } from 'src/app/services/Export/exporter.service';
import { TimesService } from 'src/app/services/times/times.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-consultar-times',
  templateUrl: './consultar-times.component.html',
  styleUrls: ['./consultar-times.component.css']
})
export class ConsultarTimesComponent implements OnInit {

  displayedColumns: string[] = ['nome_time'];
  dataSource = new MatTableDataSource<Time>();

  subscriptions: Subscription = new Subscription();

  @ViewChild('TABLE', { read: ElementRef }) table!: ElementRef;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    private timesService: TimesService,
    private excelService: ExporterService,

    ) { }

  ngOnInit(): void {
    this.listaTimes();
  }

  listaTimes(){
    this.subscriptions.add(
      this.timesService.getTimes().subscribe({
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
    // this.excelService.exportExcel(this.dataSource.data, 'times');

    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Times');

    XLSX.writeFile(wb, 'Times.xlsx');
  }

}
