import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Time, Times } from 'src/app/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimesService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getTimes():Observable<Time[]>{
    const url = `${this.baseUrl}/times/`
    return this.http.get<Time[]>(url)
  }

  postTimes(times: Time): Observable<Times> {
    const url = `${this.baseUrl}/times/`
    return this.http.post<Times>(url, times);
  }
}
