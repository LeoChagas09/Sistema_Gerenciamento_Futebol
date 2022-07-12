import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptService implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: NgToastService
  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getJWT();
    if(token){
      const reqClone = req.clone({ setHeaders: { 'Authorization': token}});

      return next.handle(reqClone).pipe(
        catchError((errorResponse : HttpErrorResponse) => {
          if(errorResponse.status === 401) {
            this.matarSessao();
          }
          return throwError(() => errorResponse);
        } )
      );
    }


    return next.handle(req).pipe(
      catchError((errorResponse : HttpErrorResponse) => {
        if(errorResponse.status === 401) {
          this.matarSessao();
        }
        return throwError(() => errorResponse);
      } )
    );;
  }

  matarSessao(){
    this.authService.matarSessao();

    this.toast.error({detail: 'Necessário fazer login!'});

    this.router.navigate(['/login']);
  }
}
