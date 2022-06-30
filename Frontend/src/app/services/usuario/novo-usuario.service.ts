import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContaNova, novaConta } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private http: HttpClient) { }

  postUsuario(url: string, usuario: novaConta): Observable<ContaNova> {
    return this.http.post<ContaNova>(url, usuario);
  }
}
