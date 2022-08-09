import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tipoFeedback } from 'src/app/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoFeedbackService {

  baseUrl: string = environment.API_NODE;

  constructor(private http: HttpClient) { }

  getTipoFeedback():Observable<tipoFeedback[]>{
    const url = `${this.baseUrl}/tipoFeedback/`
    return this.http.get<tipoFeedback[]>(url)
  }
}
