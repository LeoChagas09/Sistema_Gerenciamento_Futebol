import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Time, Times } from 'src/app/interfaces';
import { TimesService } from 'src/app/services/jogo/times.service';

@Component({
  selector: 'app-criar-times',
  templateUrl: './criar-times.component.html',
  styleUrls: ['./criar-times.component.css']
})
export class CriarTimesComponent implements OnInit {

  form_time = new FormGroup({
    nome_time: new FormControl('', [Validators.required, Validators.maxLength(200)]),
  });

  constructor(
    private dialogRef: MatDialogRef<CriarTimesComponent>,
    public timeService: TimesService,
    private fb: FormBuilder,
    private toast: NgToastService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  criarTimes(): void {

    const formValue : any = this.form_time.getRawValue();

    formValue.id_usuario_fk = this.data.idUser;
    formValue.id_campeonato = Number(this.data.id);


    this.timeService.postTimes(formValue).subscribe(times => {times.time});

    this.form_time.reset(this.setFormTimes(formValue));

    this.toast.success({detail: 'Time cadastrado com Sucesso!' , duration: 5000});

    this.dialogRef.close(formValue);

  }

  get f() {
    return this.form_time.controls;
  }

  setFormTimes(time : Time) {
    if(typeof time === 'undefined') return;
    this.f['nome_time'].setValue(time.nome_time);
  }

}
