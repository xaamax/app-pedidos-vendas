import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TituloComponent } from "@app/shared/titulo/titulo.component";

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
  imports: [RouterOutlet, TituloComponent]
})
export class PedidosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
