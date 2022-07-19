import { AuthService } from 'src/app/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { TimesService } from 'src/app/services/jogo/times.service';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent implements OnInit {


  constructor(
    private authService: AuthService,
    public timeService: TimesService
  ) { }

  ngOnInit(): void {

  }

}
