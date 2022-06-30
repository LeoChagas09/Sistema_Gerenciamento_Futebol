import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FeedbackService } from 'src/app/services/feedback/feedback.service';
import { Feedback, tipoFeedback } from 'src/app/interfaces';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TipoFeedbackService } from 'src/app/services/feedback/tipo-feedback.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {


  form_feed = new FormGroup({
    tipo_feedback: new FormControl('', [Validators.required]),
    nome: new FormControl('', [Validators.required, Validators.maxLength(200)]),
    email: new FormControl('', [Validators.required, Validators.maxLength(200)]),
    mensagem: new FormControl('', [Validators.required, Validators.maxLength(500)]),
  });

  tiposFeedbacks: tipoFeedback[] = [];

  subscriptions: Subscription = new Subscription();

  constructor(
    public feedbackService: FeedbackService,
    public tipoFeedbackService: TipoFeedbackService,
    private fb: FormBuilder,
    private toast: NgToastService
    ) { }


  ngOnInit(): void {
    this.subscriptions.add(
      this.tipoFeedbackService.getTipoFeedback().subscribe({
      next: retorno => (this.tiposFeedbacks = retorno),
      error: erro => (console.error(erro)),
    }));
  }

  enviaFeedback(): void {

    const feed: Feedback = {
      id_feedback: 0,
      id_tipo_feedback_fk: this.f['tipo_feedback'].value,
      nome: this.f['nome'].value,
      email: this.f['email'].value,
      mensagem: this.f['mensagem'].value,

    };
    console.log(feed);

    this.feedbackService.postFeedback(feed).subscribe(feed => {feed.feedback})

    this.form_feed.reset(this.setFormFeedback(feed));

    this.toast.success({detail: 'Feedback enviado com Sucesso!', summary: 'Seu Feedback foi encaminhado para nossa equipe e iremos avaliar!', duration: 8000});

  }

  get f() {
    return this.form_feed.controls;
  }

  setFormFeedback(feedback : Feedback) {
    if(typeof feedback === 'undefined') return;
    this.f['tipo_feedback'].setValue(feedback.id_tipo_feedback_fk);
    this.f['nome'].setValue(feedback.nome);
    this.f['email'].setValue(feedback.email);
    this.f['mensagem'].setValue(feedback.mensagem);
  }

}
