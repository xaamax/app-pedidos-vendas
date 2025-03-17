import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/internal/operators/tap';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({providedIn: 'root'})

export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router, private cookieService: CookieService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    if (this.cookieService.get('ACCESS_TOKEN')) {
      const cloneHttp = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${this.cookieService.get('ACCESS_TOKEN')}`)
      });
      return next.handle(cloneHttp).pipe(
        tap(
          succ => {},
          err => {
            if (err.status === 401) {
              this.router.navigateByUrl('/login');
            }
          }
        )
      );
    } else {
      return next.handle(req.clone());
    }
  }
}
