import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jogo, jogoResultado, Jogos, jogosResultado } from 'src/app/interfaces';
import { environment } from 'src/environments/environment';





@Injectable()
export class JogosService {

  baseUrl: string = environment.API_NODE;

  constructor(private http: HttpClient) { }

  getJogos(id: number):Observable<Jogo[]>{
    const url = `${this.baseUrl}/jogo/campeonato/${id}`;
    return this.http.get<Jogo[]>(url)
  }

  postJogos(jogos: Jogo): Observable<Jogos> {
    const url = `${this.baseUrl}/jogo/`
    return this.http.post<Jogos>(url, jogos);
  }

  updateJogoResultado(id: number, updatejogoResultado: jogoResultado) {
    const url = `${this.baseUrl}/jogoResultado/atualizar/${id}`
    return this.http.put<jogosResultado>(url, updatejogoResultado);
  }

  getJogoResultado(): Observable<jogoResultado[]> {
    const url = `${this.baseUrl}/jogoResultado/`
    return this.http.get<jogoResultado[]>(url);
  }

}
