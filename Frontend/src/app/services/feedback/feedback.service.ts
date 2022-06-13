import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback, Feedbacks } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }

  postFeedback(url: string, feedback: Feedback): Observable<Feedbacks> {
    const body=JSON.stringify(feedback);
    return this.http.post<Feedbacks>(url, body);
  }
}
