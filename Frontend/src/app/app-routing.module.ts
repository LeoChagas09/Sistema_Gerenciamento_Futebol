import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCampeonatosComponent } from './components/campeonato/listar-campeonatos/listar-campeonatos.component';
import { CriarContaComponent } from './components/criar-conta/criar-conta.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ListarJogosComponent } from './components/jogos/listar-jogos/listar-jogos.component';
import { JogosComponent } from './components/jogos/sorteio-jogo/jogos.component';
import { LoginComponent } from './components/login/login.component';
import { ConsultarTimesComponent } from './components/time/consultar-times/consultar-times.component';
import { ListarTimesComponent } from './components/time/listar-times/listar-times.component';

import { AuthGuardService } from './guards/auth-guard.service';
import { GuardAuthService } from './guards/guard-auth.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [GuardAuthService]},
  { path: 'cadastro', component: CriarContaComponent, canActivate: [GuardAuthService]},
  { path: 'campeonatos', component: ListarCampeonatosComponent, canActivate: [AuthGuardService]},
  { path: 'feedback', component: FeedbackComponent, canActivate: [AuthGuardService]},
  { path: 'jogosSorteio/campeonato/:id', component: JogosComponent, canActivate: [AuthGuardService]},
  { path: 'jogos/campeonato/:id', component: ListarJogosComponent, canActivate: [AuthGuardService]},
  { path: 'times', component: ConsultarTimesComponent, canActivate: [AuthGuardService]},
  { path: 'times/campeonato/:id', component: ListarTimesComponent, canActivate: [AuthGuardService]},
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService, GuardAuthService]
})
export class AppRoutingModule { }
