import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoCampeonato } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TipoCampeonatoService {

  baseUrl: string = 'http://localhost:3333/';

  constructor(private http: HttpClient) { }

  getTipoCampeonato():Observable<TipoCampeonato[]>{
    const url = `${this.baseUrl}tipoCampeonato/`;
    return this.http.get<TipoCampeonato[]>(url)
  }
}
