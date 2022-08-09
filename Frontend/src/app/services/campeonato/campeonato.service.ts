import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Campeonato, Campeonatos } from 'src/app/interfaces';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class CampeonatoService {

  baseUrl: string = environment.API_NODE;

  constructor(private http: HttpClient) { }

  getCampeonatos():Observable<Campeonato[]>{
    const url = `${this.baseUrl}/campeonato/`
    return this.http.get<Campeonato[]>(url)
  }

  getCampeonatosUser(id: number):Observable<Campeonato[]>{
    const url = `${this.baseUrl}/campeonato/user/${id}`
    return this.http.get<Campeonato[]>(url)
  }

  postCampeonatos(campeonato: Campeonato): Observable<Campeonatos> {
    const url = `${this.baseUrl}/campeonato/cadastrar`
    return this.http.post<Campeonatos>(url, campeonato);
  }

  updateCampeonatos(id: number):Observable<Campeonatos> {
    const url = `${this.baseUrl}/campeonato/times/${id}`
    return this.http.get<Campeonatos>(url);
  }
}
