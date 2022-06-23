import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Campeonato } from 'src/app/interfaces';


@Injectable({
  providedIn: 'root'
})
export class CampeonatoService {

  constructor(private http: HttpClient) { }

  getCampeonatos(url: string):Observable<Campeonato[]>{
    return this.http.get<Campeonato[]>(url)
  }

}
