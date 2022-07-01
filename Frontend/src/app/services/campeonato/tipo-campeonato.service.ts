import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoCampeonato } from 'src/app/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoCampeonatoService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getTipoCampeonato():Observable<TipoCampeonato[]>{
    const url = `${this.baseUrl}/tipoCampeonato/`;
    return this.http.get<TipoCampeonato[]>(url)
  }
}
