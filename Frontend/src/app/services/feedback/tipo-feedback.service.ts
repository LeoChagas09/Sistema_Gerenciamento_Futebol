import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tipoFeedback } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TipoFeedbackService {

  baseUrl: string = 'http://localhost:3333/';

  constructor(private http: HttpClient) { }

  getTipoFeedback():Observable<tipoFeedback[]>{
    const url = `${this.baseUrl}tipoFeedback/`
    return this.http.get<tipoFeedback[]>(url)
  }
}
