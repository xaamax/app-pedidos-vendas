import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pedido } from '@app/models/Pedido'; // Importe as interfaces
import { Produto } from '@app/models/Produto'; // Importe as interfaces
import { StatusPedido } from '@app/common/types/status-pedido.enum';
import { FormsModule } from '@angular/forms';
import { PedidoService } from '@app/services/pedidos/pedido.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido-detalhe',
  templateUrl: './pedido-detalhe.component.html',
  styleUrls: ['./pedido-detalhe.component.css'],
  imports: [FormsModule, CommonModule]
})
export class PedidoDetalheComponent {
  cliente: string = ''; // Nome do cliente (inicialmente vazio)
  novoProduto: Produto = {
    produto: '',
    quantidade: 0,
    precoUnitario: 0,
  };

  produtos: Produto[] = [];

  constructor(private router: Router, private pedidoService: PedidoService) {}

  adicionarProduto() {
    if (!this.cliente) {
      alert('Por favor, insira o nome do cliente antes de adicionar produtos.');
      return;
    }

    if (this.novoProduto.produto && this.novoProduto.quantidade && this.novoProduto.precoUnitario) {
      this.produtos.push({ ...this.novoProduto });
      this.limparFormulario();
    } else {
      alert('Preencha todos os campos do produto!');
    }
  }

  removerProduto(index: number) {
    this.produtos.splice(index, 1);
  }

  limparFormulario() {
    this.novoProduto = {
      produto: '',
      quantidade: 0,
      precoUnitario: 0,
    };
  }

  calcularTotal(): number {
    return this.produtos.reduce((total, item) => total + item.quantidade * item.precoUnitario, 0);
  }

  enviarPedido() {
    if (!this.cliente) {
      alert('Por favor, insira o nome do cliente antes de enviar o pedido.');
      return;
    }

    if (this.produtos.length === 0) {
      alert('Adicione pelo menos um produto ao pedido.');
      return;
    }

    const pedido: Pedido = {
      cliente: this.cliente,
      itens: this.produtos,
      totalPedido: this.calcularTotal(),
      status: StatusPedido.pendente,
      dataPedido: new Date()
    };

    this.pedidoService.createPedido(pedido).subscribe({
      next: (response) => {
        console.log('Pedido enviado com sucesso!', response);
        alert('Pedido enviado com sucesso!');
        this.produtos = [];
        this.cliente = '';
        this.router.navigate(['/pedidos/lista']);
      },
      error: (err) => {
        console.error('Erro ao enviar pedido:', err);
        alert('Erro ao enviar pedido. Tente novamente.');
      },
    });
  }
}
