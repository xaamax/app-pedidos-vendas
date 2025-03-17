import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {
  @Input() template = '';
  @Input() titulo = '';
  @Input() subtitulo =  '';
  @Input() icone = 'fa fa-home';
  @Input() btnListar = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  listar(): void{
    this.router.navigate([`/${this.template.toLowerCase()}/lista`]);
  }

}
