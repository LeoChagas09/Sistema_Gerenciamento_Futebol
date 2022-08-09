import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jogo, Jogos } from 'src/app/interfaces';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class JogosService {

  baseUrl: string = environment.API_NODE;

  constructor(private http: HttpClient) { }

  getJogos():Observable<Jogo[]>{
    const url = `${this.baseUrl}/jogo/`
    return this.http.get<Jogo[]>(url)
  }

  postJogos(jogos: Jogo): Observable<Jogos> {
    const url = `${this.baseUrl}/jogo/`
    return this.http.post<Jogos>(url, jogos);
  }

}
