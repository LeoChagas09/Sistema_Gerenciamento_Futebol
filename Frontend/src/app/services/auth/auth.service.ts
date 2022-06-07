import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  autenticado: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {

   }

}
