import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public userLogado: boolean = false;

  constructor(private authService: AuthService) { }



  ngOnInit(): void {
    this.userLogado = this.authService.getJWT() ? true : false;
  }

}
