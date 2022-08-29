import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { JogosService } from 'src/app/services/jogo/jogos.service';

@Component({
  selector: 'app-atualizar-status-jogo',
  templateUrl: './atualizar-status-jogo.component.html',
  styleUrls: ['./atualizar-status-jogo.component.css']
})
export class AtualizarStatusJogoComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<AtualizarStatusJogoComponent>,
    private jogosService: JogosService,
    private toast: NgToastService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {

  }

  atualizarStatus() {

    const id_jogo =  this.data.idJogo

    this.jogosService.updateStatusJogo(id_jogo).subscribe({
      next: retorno => (retorno),
      error: erro => (console.error(erro))
    })

    this.toast.success({detail: 'Partida finalizada com sucesso!' , duration: 8000});

    this.dialogRef.close(this.data.idJogo);
  }

  fechar(){
    this.dialogRef.close(this.data.idJogo);
  }

}
