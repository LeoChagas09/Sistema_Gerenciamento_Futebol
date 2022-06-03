import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _autenticado: boolean = false;

  constructor() { }

  get autenticado(){
    return this._autenticado;
  }

  set autenticado(valor: boolean) {
    this._autenticado = valor;
  }
}
