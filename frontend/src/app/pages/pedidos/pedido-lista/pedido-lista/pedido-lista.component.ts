import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoService } from '@app/services/pedidos/pedido.service';
import { Pedido } from '@app/models/Pedido';
import { Router } from '@angular/router';
import { StatusPedido } from '@app/common/types/status-pedido.enum';

@Component({
  selector: 'app-pedido-lista',
  templateUrl: './pedido-lista.component.html',
  styleUrls: ['./pedido-lista.component.css'],
  imports: [CommonModule]
})
export class PedidoListaComponent implements OnInit {
  pedidos: Pedido[] = [];

  fields: { key: keyof Pedido; label: string }[] = [
    { key: 'id', label: '#' },
    { key: 'cliente', label: 'Cliente' },
    { key: 'status', label: 'Status' },
    { key: 'totalPedido', label: 'Total' },
  ];


  constructor(private pedidoService: PedidoService, private router: Router) { }

  ngOnInit() {
    this.getPedidos();
  }

  public getPedidos(): void {
    this.pedidoService.getAll().subscribe({
      next: (response: Pedido[]) => {
        this.pedidos = response
      },
    });
  }

  criar(): void{
    this.router.navigate(['pedidos/criar']);
  }

  linhaSelecionada: number | null = null;

  toggleProdutos(index: number) {
    this.linhaSelecionada = this.linhaSelecionada === index ? null : index;
  }

  atualizarStatus(pedido: Pedido) {
    if(confirm('Tem certeza que deseja processar o pedido? Essa ação não poderá ser desfeita.')){
        this.pedidoService.updateStatusPedido(pedido).subscribe({
          next: () => {
            alert('Status Pedido alterado com sucesso!');
            this.getPedidos();
          },
          error: (error) => {
            alert(`Erro ao alterar Status Pedido: ${error}`);
          }
        });
    }
  }

}
