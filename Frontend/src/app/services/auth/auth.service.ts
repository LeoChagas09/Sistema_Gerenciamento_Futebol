import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface PayloadToken {
  id_usuario: string;
  iat: number;
  exp: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  autenticado: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor( ) {
    if(localStorage.getItem('token')){
      this.autenticado.next(true);
    }
   }

  armazenaJWT(token: string) {
    localStorage.setItem('token', token);

    this.autenticado.next(true);
  }

  getJWT(): string | null {
    return localStorage.getItem('token');
  }

  getPayloadJWT(): PayloadToken | null {
    const jwt = this.getJWT();
    if(typeof jwt !== 'string') {
      return null;
    }
    const payloadBase64 = jwt.split('.')[1];
    if(payloadBase64.length <= 0) {
      return null;
    }
    const payloadString = atob(payloadBase64);
    const payload: PayloadToken = JSON.parse(payloadString);
    return payload;
  }

  matarSessao(){
    localStorage.removeItem('token');
    this.autenticado.next(false);
  }

}
