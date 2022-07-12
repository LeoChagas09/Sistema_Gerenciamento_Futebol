import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  autenticado: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {

   }

  armazenaJWT(token: string) {
    localStorage.setItem('token', token);

    this.autenticado.next(true);
  }

  getJWT(): string | null {
    return localStorage.getItem('token');
  }

  matarSessao(){
    localStorage.removeItem('token');
    this.autenticado.next(false);
  }

}
