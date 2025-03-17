import { AuthService } from '@app/services/auth/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  isCollapsed = true;
  nav = false;
  constructor(
    private router: Router,
    public authService: AuthService
  ) {}

  ngOnInit(): void {}

  get showMenu(): boolean {
    switch (this.router.url) {
      case '/user/login':
        return this.nav;
      case '/user/registration':
        return this.nav;
      default:
        return !this.nav;
    }
  }

  Logout(): any {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
