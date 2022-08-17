import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CampeonatoService } from 'src/app/services/campeonato/campeonato.service';
import { ExporterService } from 'src/app/services/Export/exporter.service';
import * as XLSX from 'xlsx';
import { TimesService } from 'src/app/services/times/times.service';
import { Time, Times } from 'src/app/interfaces';
import { debounceTime, of, startWith, Subscription, switchMap, tap } from 'rxjs';
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

  timesSelecionados: Time[] = [];

  buscar = new FormControl();
  timesControl = new FormControl();
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

  @ViewChild('times', { read: ElementRef }) select!: ElementRef;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private authService: AuthService,
    private toast: NgToastService,
    private timesService: TimesService,
    private route: ActivatedRoute,
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

  Salvar(id: number) {
    this.timesService.setTimesSelecionados(this.timesSelecionados);
    this.router.navigate([`/jogosSorteio/campeonato/${this.id}`]);
  }

  voltar() {
    this.router.navigate(['campeonatos']);
  }

}
