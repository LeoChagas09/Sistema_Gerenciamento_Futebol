import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCampeonatosComponent } from './components/campeonato/listar-campeonatos/listar-campeonatos.component';
import { CriarContaComponent } from './components/criar-conta/criar-conta.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'home', component: LoginComponent},
  { path: 'cadastro', component: CriarContaComponent},
  { path: 'campeonatos', component: ListarCampeonatosComponent},
  { path: 'feedback', component: FeedbackComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
