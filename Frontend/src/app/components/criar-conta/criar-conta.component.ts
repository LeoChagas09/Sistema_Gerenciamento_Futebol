import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { novoUsuario } from 'src/app/interfaces';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.css']
})
export class CriarContaComponent implements OnInit {

  userForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required])
  });

  constructor(
    public usuarioService: UsuarioService,
    public router: Router,
    private fb: FormBuilder,
    private toast: NgToastService
  ) { }

  ngOnInit(): void {
  }

  CriarUsuario(){

    const formValue : novoUsuario = this.userForm.getRawValue();

    this.usuarioService.CriarUsuario(formValue).subscribe({
      next: result => {
        result.usuario;
        this.router.navigate(['login']);
        this.toast.success({detail: 'Usuário cadastrado com sucesso'});
      },
      error: erro => {
        if(typeof erro.error.msg !== 'undefined') {
          this.toast.error(erro.error.msg);
          return;
        }
        this.toast.error({detail: 'Erro ao cadastrar novo usuário'});
      }
    });
  }

  voltar() {
    this.router.navigate(['login'])
  }

}
