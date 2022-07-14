import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { Subscription } from 'rxjs';
import { Campeonato, TipoCampeonato } from 'src/app/interfaces';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CampeonatoService } from 'src/app/services/campeonato/campeonato.service';
import { TipoCampeonatoService } from 'src/app/services/campeonato/tipo-campeonato.service';

@Component({
  selector: 'app-criar-campeonatos',
  templateUrl: './criar-campeonatos.component.html',
  styleUrls: ['./criar-campeonatos.component.css']
})
export class CriarCampeonatosComponent implements OnInit {

  form_campeonato = new FormGroup({
    id_tipo_fk: new FormControl('', [Validators.required]),
    nome_campeonato: new FormControl('', [Validators.required, Validators.maxLength(200)]),
    data_campeonato: new FormControl('', [Validators.required]),
    local_campeonato: new FormControl('', [Validators.required, Validators.maxLength(200)]),
  });

  constructor(
    public dialogRef: MatDialogRef<CriarCampeonatosComponent>,
    public tipoCampeonatoService: TipoCampeonatoService,
    public campeonatoService: CampeonatoService,
    private authService: AuthService,
    private fb: FormBuilder,
    private toast: NgToastService,
    @Inject(MAT_DIALOG_DATA) public data: any
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

    formValue.id_usuario_fk = this.data.idUser;

    this.campeonatoService.postCampeonatos(formValue).subscribe(campeo => {campeo.campeonato});

    this.form_campeonato.reset(this.setFormCampeonato(formValue));

    this.toast.success({detail: 'Campeonato cadastrado com Sucesso!' , duration: 8000});

    document.location.reload();
  }

  get f() {
    return this.form_campeonato.controls;
  }

  setFormCampeonato(campeonato : Campeonato) {
    if(typeof campeonato === 'undefined') return;
    this.f['id_tipo_fk'].setValue(campeonato.id_tipo_fk);
    this.f['nome_campeonato'].setValue(campeonato.nome_campeonato);
    this.f['data_campeonato'].setValue(campeonato.data_campeonato);
    this.f['local_campeonato'].setValue(campeonato.local_campeonato);
  }

}
