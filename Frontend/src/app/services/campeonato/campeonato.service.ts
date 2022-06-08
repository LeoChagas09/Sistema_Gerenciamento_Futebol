import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListarCampeonato } from 'src/app/interfaces';


@Injectable({
  providedIn: 'root'
})
export class CampeonatoService {

  constructor(private http: HttpClient) { }

  getCampeonatos(url: string):Observable<ListarCampeonato>{
    return this.http.get<ListarCampeonato>(url)
  }

}
