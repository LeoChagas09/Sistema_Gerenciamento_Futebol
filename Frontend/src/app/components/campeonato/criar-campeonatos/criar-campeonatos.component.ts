import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { Subscription } from 'rxjs';
import { Campeonato, TipoCampeonato } from 'src/app/interfaces';
import { CampeonatoService } from 'src/app/services/campeonato/campeonato.service';
import { TipoCampeonatoService } from 'src/app/services/campeonato/tipo-campeonato.service';

@Component({
  selector: 'app-criar-campeonatos',
  templateUrl: './criar-campeonatos.component.html',
  styleUrls: ['./criar-campeonatos.component.css']
})
export class CriarCampeonatosComponent implements OnInit {

  form_campeonato = new FormGroup({
    tipo_campeonato: new FormControl('', [Validators.required]),
    nome: new FormControl('', [Validators.required, Validators.maxLength(200)]),
    data: new FormControl('', [Validators.required]),
    local: new FormControl('', [Validators.required, Validators.maxLength(200)]),
  });

  constructor(
    public dialogRef: MatDialogRef<CriarCampeonatosComponent>,
    public tipoCampeonatoService: TipoCampeonatoService,
    public campeonatoService: CampeonatoService,
    private fb: FormBuilder,
    private toast: NgToastService
    ) { }

    tiposCampeonatos: TipoCampeonato[] = [];

    subscriptions: Subscription = new Subscription();

  ngOnInit(): void {
    this.subscriptions.add(
      this.tipoCampeonatoService.getTipoCampeonato().subscribe({
      next: retorno => (this.tiposCampeonatos = retorno),
      error: erro => (console.error(erro)),
    }));
  }

  criarCampeonato(): void {

    const formValue : Campeonato = this.form_campeonato.getRawValue();

    this.campeonatoService.postCampeonatos(formValue).subscribe(campeo => {campeo.campeonatos});

    this.form_campeonato.reset(this.setFormCampeonato(formValue));

    this.toast.success({detail: 'Campeonato cadastrado com Sucesso!' , duration: 8000});
  }

  get f() {
    return this.form_campeonato.controls;
  }

  setFormCampeonato(campeonato : Campeonato) {
    if(typeof campeonato === 'undefined') return;
    this.f['tipo_campeonato'].setValue(campeonato.id_tipo_fk);
    this.f['nome'].setValue(campeonato.nome_campeonato);
    this.f['data'].setValue(campeonato.data_campeonato);
    this.f['local'].setValue(campeonato.local_campeonato);
  }

}
