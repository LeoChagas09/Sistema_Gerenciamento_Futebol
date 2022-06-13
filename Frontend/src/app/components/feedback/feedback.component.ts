import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FeedbackService } from 'src/app/services/feedback/feedback.service';
import { Feedback, Feedbacks } from 'src/app/interfaces';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {


  subscriptions: Subscription = new Subscription();

  constructor(public feedbackService: FeedbackService) { }

  ngOnInit(): void {
  }

}
