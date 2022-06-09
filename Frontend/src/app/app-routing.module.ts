import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CriarCampeonatosComponent } from './components/campeonato/criar-campeonatos/criar-campeonatos.component';
import { ListarCampeonatosComponent } from './components/campeonato/listar-campeonatos/listar-campeonatos.component';
import { CriarContaComponent } from './components/criar-conta/criar-conta.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'home', component: ListarCampeonatosComponent},
  { path: '**',  redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
