import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Time } from 'src/app/interfaces';
import { TimesService } from 'src/app/services/times/times.service';

interface Jogos {
  time_1: Time,
  time_2: Time,
}
@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css'],
})

export class JogosComponent implements OnInit {

   displayedColumns: string[] = ['time1', 'time2'];
   dataSource:Jogos[] = [];
   _times: Time[] = [];

  constructor(
    private timesService: TimesService,
    private router:Router,

  ) {
    this.timesService.times.subscribe(times => {
      this._times = times;
    });

   }

  ngOnInit(): void {
    if(this.timesService.times.getValue().length <= 0) {
      this.router.navigate(['/campeonatos']);
    }
    this.dataSource = this.montarTimes(this._times);
  }

  sortear() {
    const tamanhoMaximoArray = this._times.length;
    const arrayEmbaralhado: any[] = [];

    this._times.forEach(time =>{
      //Sorteia um index para adicionar o time no novo array
      const index = this.sortNumber(tamanhoMaximoArray, arrayEmbaralhado);
      arrayEmbaralhado[index] = time;
    })

    this.dataSource = this.montarTimes(arrayEmbaralhado);
  }

  sortNumber(tamanhoMaximoArray: number, novoArray: any[]) {
    let posicaoVazia = Math.floor(Math.random() * tamanhoMaximoArray);
    while (typeof novoArray[posicaoVazia] !== 'undefined') {
      posicaoVazia = Math.floor(Math.random() * tamanhoMaximoArray);
    };
    return posicaoVazia;
  }

  montarTimes(times: Time[]) {
    const jogosCampeonato: Jogos[] = [];

    let index = 0;
    while (index < times.length) {
      //Monta os jogos andando de 2 em 2, pois são dois times por jogos
      const novoJogo: Jogos = {
        time_1: times[index],
        time_2: times[index+1],
      };
      jogosCampeonato.push(novoJogo);
      index = index + 2;
    }
    return jogosCampeonato;
  }

}
