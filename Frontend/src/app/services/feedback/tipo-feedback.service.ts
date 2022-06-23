import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tipoFeedback } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TipoFeedbackService {

  constructor(private http: HttpClient) { }

  getTipoFeedback(url: string):Observable<tipoFeedback[]>{
    return this.http.get<tipoFeedback[]>(url)
  }
}
