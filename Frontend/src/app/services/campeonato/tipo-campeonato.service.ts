import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoCampeonato } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TipoCampeonatoService {

  constructor(private http: HttpClient) { }

  getTipoCampeonato(url: string):Observable<TipoCampeonato[]>{
    return this.http.get<TipoCampeonato[]>(url)
  }
}
