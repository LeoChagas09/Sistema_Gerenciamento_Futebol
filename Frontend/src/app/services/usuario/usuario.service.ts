import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login, novaConta } from 'src/app/interfaces';
import { environment } from 'src/environments/environment';

export interface LoginResponseInterface {
  msg: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  validaUsuario(data: Login):Observable<LoginResponseInterface>{
    const url = `${this.baseUrl}/login/`
    return this.http.post<LoginResponseInterface>(url, data);
  }

  CriarUsuario(user: novaConta):Observable<novaConta>{
    const url = `${this.baseUrl}/login/cadastro/`
    return this.http.post<novaConta>(url, user);
  }


}
