import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Time, Times } from 'src/app/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimesService {

  baseUrl: string = environment.API_NODE;


  times: BehaviorSubject<Time[]> = new BehaviorSubject<Time[]>([]);

  constructor(private http: HttpClient) {
   }

  getTimes():Observable<Time[]>{
    const url = `${this.baseUrl}/times/`
    return this.http.get<Time[]>(url)
  }

  postTimes(times: Time): Observable<Times> {
    const url = `${this.baseUrl}/times/`
    return this.http.post<Times>(url, times);
  }

  setTimesSelecionados(times: Time[]) {
    this.times.next(times);
  }

}
