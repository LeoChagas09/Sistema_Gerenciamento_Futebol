import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Time } from 'src/app/interfaces';
import { TimesService } from 'src/app/services/times/times.service';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent implements OnInit {




  constructor(
    private timesService: TimesService,

  ) { }

  ngOnInit(): void {
    this.timesService.times.subscribe(times => console.log(times));
  }

}
