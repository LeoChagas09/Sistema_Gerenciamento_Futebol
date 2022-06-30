import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback, Feedbacks } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  baseUrl: string = 'http://localhost:3333/';

  constructor(private http: HttpClient) { }

  postFeedback(feedback: Feedback): Observable<Feedbacks> {
    const url = `${this.baseUrl}feedback/`
    return this.http.post<Feedbacks>(url, feedback);
  }
}
