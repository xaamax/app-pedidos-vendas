import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule]
})
export class LoginComponent implements OnInit {
  user: any = {};
  isLoggedIn = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {}

  Login(){
    this.isLoggedIn = true;
    this.authService.login(this.user)
    .subscribe(
      (response: any) => {
        this.authService.setToken(response.accessToken);
        this.router.navigate(['/pedidos']);
      },
      (error: any) => {
        console.log(`Error: ${error}`);
      }
    );
    this.isLoggedIn = false;
  }

}
