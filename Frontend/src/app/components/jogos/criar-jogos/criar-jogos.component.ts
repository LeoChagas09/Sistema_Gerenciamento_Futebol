import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Subscription } from 'rxjs';
import { Campeonato, Jogo } from 'src/app/interfaces';
import { CampeonatoService } from 'src/app/services/campeonato/campeonato.service';
import { JogosService } from 'src/app/services/jogo/jogos.service';

@Component({
  selector: 'app-criar-jogos',
  templateUrl: './criar-jogos.component.html',
  styleUrls: ['./criar-jogos.component.css']
})
export class CriarJogosComponent implements OnInit {

  form_jogo = new FormGroup({
    local_ida: new FormControl('', [Validators.required]),
    local_volta: new FormControl('', [Validators.required, Validators.maxLength(200)]),
    data_ida: new FormControl('', [Validators.required]),
    data_volta: new FormControl('', [Validators.required]),
  });

  subscriptions: Subscription = new Subscription();

  campeonato: any;

  id: any;

  dataInicio: any;

  constructor(
    private dialogRef: MatDialogRef<CriarJogosComponent>,
    public jogosService: JogosService,
    public campeonatoService: CampeonatoService,
    private router: Router,
    private fb: FormBuilder,
    private toast: NgToastService,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.listarCampeonatos();

    console.log(this.campeonato);

    this.listarCampeonatos();

    console.log(this.campeonato);
  }

  async listarCampeonatos() {
    await this.campeonatoService.getCampeonatosId(this.data.idCampeonato).subscribe(
      retorno =>  {
        this.campeonato = retorno;
        console.log(this.campeonato);
      }
    )
  }


  criarJogo(): void {

    const formValue : Jogo = this.form_jogo.getRawValue();

    formValue.id_campeonato_fk = this.data.idCampeonato;
    formValue.id_time_1_fk = this.data.id_time_1;
    formValue.id_time_2_fk = this.data.id_time_2;

    this.campeonatoService.getCampeonatosId(this.data.idCampeonato).subscribe(
      retorno =>  {

        if(formValue.data_ida >= retorno.data_inicio_campeonato || formValue.data_volta <= retorno.data_final_campeonato){

            if(formValue.data_ida > formValue.data_volta ){
              this.toast.error({detail: 'Data de inicio não pode ser maior que data final' , duration: 8000});
            } else {
              this.jogosService.postJogos(formValue).subscribe({
                next: retorno => (retorno.jogo),
                error: erro => (console.error(erro)),
              });

              this.form_jogo.reset(this.setFormJogo(formValue));

              this.toast.success({detail: 'Jogo cadastrado com Sucesso!' , duration: 8000});

              this.dialogRef.close(formValue);
            }
          } else {
          this.toast.error({detail: 'if1' , duration: 8000});
        }
      }
    )

  }

  get f() {
    return this.form_jogo.controls;
  }

  setFormJogo(jogo : Jogo) {
    if(typeof jogo === 'undefined') return;
    this.f['data_ida'].setValue(jogo.data_ida);
    this.f['local_ida'].setValue(jogo.local_ida);
    this.f['data_volta'].setValue(jogo.data_volta);
    this.f['local_volta'].setValue(jogo.local_volta);
  }

  fechar(){
    this.dialogRef.close(this.form_jogo);
  }

}
