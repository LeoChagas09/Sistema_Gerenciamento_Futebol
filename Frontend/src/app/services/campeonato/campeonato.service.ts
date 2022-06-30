import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Campeonato, Campeonatos } from 'src/app/interfaces';


@Injectable({
  providedIn: 'root'
})
export class CampeonatoService {

  baseUrl: string = 'http://localhost:3333/';

  constructor(private http: HttpClient) { }

  getCampeonatos():Observable<Campeonato[]>{
    const url = `${this.baseUrl}campeonato/`
    return this.http.get<Campeonato[]>(url)
  }

  postCampeonatos(campeonato: Campeonato): Observable<Campeonatos> {
    const url = `${this.baseUrl}campeonato/cadastrar`
    return this.http.post<Campeonatos>(url, campeonato);
  }
}
