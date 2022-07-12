import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCampeonatosComponent } from './components/campeonato/listar-campeonatos/listar-campeonatos.component';
import { CriarContaComponent } from './components/criar-conta/criar-conta.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { GuardAuthService } from './guards/guard-auth.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [GuardAuthService]},
  { path: 'cadastro', component: CriarContaComponent, canActivate: [GuardAuthService]},
  { path: 'campeonatos', component: ListarCampeonatosComponent, canActivate: [AuthGuardService]},
  { path: 'feedback', component: FeedbackComponent, canActivate: [AuthGuardService]},
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService, GuardAuthService]
})
export class AppRoutingModule { }
