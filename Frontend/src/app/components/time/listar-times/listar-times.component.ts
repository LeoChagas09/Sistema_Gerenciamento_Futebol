import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CampeonatoService } from 'src/app/services/campeonato/campeonato.service';
import { ExporterService } from 'src/app/services/Export/exporter.service';
import { CriarTimesComponent } from '../criar-times/criar-times.component';
import * as XLSX from 'xlsx';
import { TimesService } from 'src/app/services/times/times.service';
import { Time, Times } from 'src/app/interfaces';
import { debounceTime, of, startWith, Subscription, switchMap } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-listar-times',
  templateUrl: './listar-times.component.html',
  styleUrls: ['./listar-times.component.css']
})
export class ListarTimesComponent implements OnInit {

  idUser = Number(this.authService.getPayloadJWT()?.id_usuario);

  id: any;

  subscriptions: Subscription = new Subscription();

  buscar = new FormControl();
  shoesControl = new FormControl();
  time: Time[] = [];

  $search = this.buscar.valueChanges.pipe(
    startWith(null),
    debounceTime(100),
    switchMap((result: any) => {
      if(!result) return of(this.time);
      result = result.toLowerCase();
      return of(
        this.time.filter(x => x.nome_time.toLowerCase().indexOf(result) >= 0)
      );
    })
  )

  selectionChange(option: any) {
    let value = this.shoesControl.value || [];
    if(option.selected) value.push(option.value);
    else value = value.filter((x: any) => x != option.value);
    this.shoesControl.setValue(value);
  }

  @ViewChild('shoes', { read: ElementRef }) select!: ElementRef;

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
      this.timesService.getTimes().subscribe({
      next: retorno => (this.time = retorno),
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
    });
  }



  voltar() {
    this.router.navigate(['/campeonatos']);
  }

  exportExcel(){
    // this.excelService.exportExcel(this.dataSource.data, 'times');

    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.select.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Times');

    XLSX.writeFile(wb, 'Times.xlsx');
  }

}
