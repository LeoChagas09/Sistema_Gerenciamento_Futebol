import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FeedbackService } from 'src/app/services/feedback/feedback.service';
import { Feedback, tipoFeedback } from 'src/app/interfaces';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TipoFeedbackService } from 'src/app/services/feedback/tipo-feedback.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  bsModalRef!: BsModalRef;

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
    private modalService: BsModalService
    ) { }


  ngOnInit(): void {
    this.subscriptions.add(
      this.tipoFeedbackService.getTipoFeedback('http://localhost:3333/tipoFeedback/').subscribe({
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

    this.feedbackService.postFeedback('http://localhost:3333/feedback/', feed).subscribe(feed => {feed.feedback})

    this.form_feed.reset(feed);

    this.handleSucess();

  }

  get f() {
    return this.form_feed.controls;
  }

  handleSucess(){
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'success';
    this.bsModalRef.content.message = 'Feedback enviado com Sucesso';
  }

}
