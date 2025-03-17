import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@app/models/User';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  login(model: User): any {
    return this.http
    .post('https://dummyjson.com/auth/login', model)
  }

  setToken(token: string) {
    this.cookieService.set('ACCESS_TOKEN', token, { path: '/' });
  }

  getToken(): string {
    return this.cookieService.get('ACCESS_TOKEN');
  }

  logout() {
    this.cookieService.delete('ACCESS_TOKEN', '/');
  }
}
