import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { HttpInterceptService } from './services/http/http-intercept.service';
import { NgToastModule } from 'ng-angular-popup';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CriarContaComponent } from './components/criar-conta/criar-conta.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListarCampeonatosComponent } from './components/campeonato/listar-campeonatos/listar-campeonatos.component';
import { HomeComponent } from './components/home/home.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { CriarCampeonatosComponent } from './components/campeonato/criar-campeonatos/criar-campeonatos.component';
import { ListarTimesComponent } from './components/time/listar-times/listar-times.component';
import { ExporterService } from './services/Export/exporter.service';
import { ConsultarTimesComponent } from './components/time/consultar-times/consultar-times.component';
import { JogosComponent } from './components/jogos/jogos.component';


import localePT from '@angular/common/locales/pt';




registerLocaleData(localePT);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CriarContaComponent,
    HeaderComponent,
    FooterComponent,
    ListarCampeonatosComponent,
    HomeComponent,
    FeedbackComponent,
    CriarCampeonatosComponent,
    JogosComponent,
    ListarTimesComponent,
    ConsultarTimesComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    NgToastModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-br'},
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptService, multi: true },
    ExporterService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
