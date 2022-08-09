import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback, Feedbacks } from 'src/app/interfaces';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  baseUrl: string = environment.API_NODE;

  constructor(private http: HttpClient) { }

  postFeedback(feedback: Feedback): Observable<Feedbacks> {
    const url = `${this.baseUrl}/feedback/`
    return this.http.post<Feedbacks>(url, feedback);
  }
}
