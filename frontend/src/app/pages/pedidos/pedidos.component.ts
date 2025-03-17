import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TituloComponent } from "@app/shared/titulo/titulo.component";
import { PedidoService } from '@app/services/pedidos/pedido.service';
import { Pedido } from '@app/models/Pedido';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
  imports: [RouterOutlet, TituloComponent]
})
export class PedidosComponent implements OnInit {

  constructor(private pedidoService: PedidoService) { }

  ngOnInit() {
    this.getPedidos();
  }

  public getPedidos(): void {
    this.pedidoService.getAll().subscribe((data: any) => {
      console.log(data)
    })
  }

}
