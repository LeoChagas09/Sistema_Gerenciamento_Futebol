import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-criar-campeonatos',
  templateUrl: './criar-campeonatos.component.html',
  styleUrls: ['./criar-campeonatos.component.css']
})
export class CriarCampeonatosComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CriarCampeonatosComponent>) { }

  ngOnInit(): void {
  }

}
