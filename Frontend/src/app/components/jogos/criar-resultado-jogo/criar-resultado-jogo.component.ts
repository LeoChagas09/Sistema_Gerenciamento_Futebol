import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { jogoResultado } from 'src/app/interfaces';
import { JogosService } from 'src/app/services/jogo/jogos.service';

@Component({
  selector: 'app-criar-resultado-jogo',
  templateUrl: './criar-resultado-jogo.component.html',
  styleUrls: ['./criar-resultado-jogo.component.css']
})
export class CriarResultadoJogoComponent implements OnInit {

  form_resultado_jogo = new FormGroup({
    placar_time_1: new FormControl('', [Validators.required]),
    placar_time_2: new FormControl('', [Validators.required]),
  });

  constructor(
    private dialogRef: MatDialogRef<CriarResultadoJogoComponent>,
    private jogosService: JogosService,
    private toast: NgToastService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
  }

  criarResultado(): void {

    const formValue : jogoResultado = this.form_resultado_jogo.getRawValue();

    formValue.id_jogo_fk = this.data.idJogo;

    this.jogosService.postJogoResultado(formValue).subscribe({
      next: retorno => (retorno.jogoResultado),
      error: erro => (console.error(erro)),
    });

    this.form_resultado_jogo.reset(this.setFormJogoResultado(formValue));

    this.toast.success({detail: 'Resultado cadastrado com Sucesso!' , duration: 8000});

    this.dialogRef.close(formValue);
  }

  get f() {
    return this.form_resultado_jogo.controls;
  }

  setFormJogoResultado(jogoResultado : jogoResultado) {
    if(typeof jogoResultado === 'undefined') return;
    this.f['placar_time_1'].setValue(jogoResultado.placar_time_1);
    this.f['placar_time_2'].setValue(jogoResultado.placar_time_2);

  }

  fechar(){
    this.dialogRef.close(this.form_resultado_jogo);
  }

}
