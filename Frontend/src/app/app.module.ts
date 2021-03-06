import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgToastModule } from 'ng-angular-popup';

import { registerLocaleData } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatSortModule } from '@angular/material/sort';


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
import { CriarTimesComponent } from './components/time/criar-times/criar-times.component';


import { HttpInterceptService } from './services/http/http-intercept.service';
import { JogosComponent } from './components/jogos/jogos.component';

import localePT from '@angular/common/locales/pt';
import { ExporterService } from './services/Export/exporter.service';


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
    CriarTimesComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    NgToastModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatSortModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-br'},
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptService, multi: true },
    ExporterService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
