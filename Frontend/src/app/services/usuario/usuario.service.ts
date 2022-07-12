import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContaNova, Login, novoUsuario } from 'src/app/interfaces';
import { environment } from 'src/environments/environment';

export interface LoginResponseInterface {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  login(data: Login):Observable<LoginResponseInterface>{
    const url = `${this.baseUrl}/login/`
    return this.http.post<LoginResponseInterface>(url, data);
  }

  CriarUsuario(user: novoUsuario):Observable<ContaNova>{
    const url = `${this.baseUrl}/login/cadastro/`
    return this.http.post<ContaNova>(url, user);
  }


}
