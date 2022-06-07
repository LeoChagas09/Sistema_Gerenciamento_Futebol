import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CriarContaComponent,
    HeaderComponent,
    FooterComponent,
    ListarCampeonatosComponent,
    HomeComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
