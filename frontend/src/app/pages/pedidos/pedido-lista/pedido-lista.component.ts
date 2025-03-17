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
  StatusPedido = StatusPedido;

  pedidos: Pedido[] = [];

  fields: { key: keyof Pedido; label: string, type?: string }[] = [
    { key: 'id', label: '#' },
    { key: 'cliente', label: 'Cliente' },
    { key: 'status', label: 'Status' },
    { key: 'dataPedido', label: 'Data Criacao', type: 'datetime' },
    { key: 'totalPedido', label: 'Total', type: 'currency' },
  ];

  formatarValor(valor: any, tipo: string | undefined): string {
    if (tipo === 'currency' && (typeof valor === 'number' || typeof valor === 'string')) {
      return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    } else if (tipo === 'datetime' && valor) {

      const data = new Date(valor);
      if (!isNaN(data.getTime())) {
        return data.toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).replace(',','');
      }
    }
    return valor;
  }

  filtrosSelecionados: StatusPedido[] = [StatusPedido.pendente, StatusPedido.processado];

  pedidosFiltrados: Pedido[] = [];

  constructor(
    private pedidoService: PedidoService,
    private router: Router,
  ) { }

  filtrarPedidos() {
    this.pedidosFiltrados = this.pedidos.filter((pedido) =>
      this.filtrosSelecionados.includes(pedido.status)
    );
  }

  atualizarFiltro(status: StatusPedido, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.filtrosSelecionados.push(status);
    } else {
      this.filtrosSelecionados = this.filtrosSelecionados.filter(
        (filtro) => filtro !== status
      );
    }

    this.filtrarPedidos();
  }

  ngOnInit() {
    this.getPedidos();
  }

  public getPedidos(): void {
    this.pedidoService.getAll().subscribe({
      next: (response: Pedido[]) => {
        this.pedidos = response
        this.pedidosFiltrados = this.pedidos
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
