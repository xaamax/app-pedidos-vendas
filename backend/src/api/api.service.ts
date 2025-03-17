import { Injectable } from '@nestjs/common';
import { AppService } from 'src/common/app.service';
import { CreatePedidosDto } from 'src/common/dtos/create-pedidos.dto';
import { UpdateStatusPedidoDto } from 'src/common/dtos/update-status-pedido.dto';

@Injectable()
export class ApiService {
  constructor(private readonly appService: AppService) {}

  // TODO: criar o DTO 
  async createPedido(createDto: CreatePedidosDto) {
    return this.appService.createPedido(createDto);
  }

  async getAllPedidos() {
    return this.appService.findAllPedidos();
  }
  // TODO: criar o DTO
  async updateOnePedido(id: string, updateDto: UpdateStatusPedidoDto) {
    return this.appService.updateOnePedido(id, updateDto);
  }
}
