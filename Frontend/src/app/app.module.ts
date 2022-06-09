import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { registerLocaleData } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

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
import { EditarCampeonatosComponent } from './components/campeonato/editar-campeonatos/editar-campeonatos.component';

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
    EditarCampeonatosComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-br'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
