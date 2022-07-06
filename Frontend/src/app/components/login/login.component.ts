import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Login } from 'src/app/interfaces';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm = new FormGroup({
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
    this.userForm
  }

  onLogin() {
    if(this.userForm.invalid){
      this.toast.error({detail: 'Campos email ou senha não preenchidos'});
      return;
    }

    const formValue : Login = this.userForm.getRawValue();

    this.usuarioService.validaUsuario(formValue).subscribe({
      next: result => {
        this.router.navigate(['campeonatos']);
        this.toast.success({detail: 'Login realizado com sucesso'});
      },
      error: erro => {
        if(typeof erro.error.msg !== 'undefined') {
          this.toast.error(erro.error.msg);
          return;
        }
        this.toast.error({detail: 'Erro ao tentar logar'});
      }
    });
  }

  criarConta(){
    this.router.navigate(['/cadastro']);
  }

}
