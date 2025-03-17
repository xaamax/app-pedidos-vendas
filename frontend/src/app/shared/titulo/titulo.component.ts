import { AuthService } from './../../services/auth/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {
  @Input() template = '';
  @Input() subtitulo =  '';
  @Input() icone = 'fa fa-home';
  @Input() btnListar = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  listar(): void{
    this.router.navigate([`/${this.template.toLowerCase()}/lista`]);
  }

  logout(){
    this.authService.logout();
  }

}
