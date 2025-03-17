import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Patch,
} from '@nestjs/common';

import { ApiService } from './api.service';
import { CreatePedidosDto } from 'src/common/dtos/create-pedidos.dto';
import { UpdateStatusPedidoDto } from 'src/common/dtos/update-status-pedido.dto';
import { Unprotected } from 'src/common/decorators/unprotected.decorator';

@Controller()
export class ApiController {
  constructor(private readonly apiService: ApiService) {}
  
  @Unprotected()
  @Get('/health')
  healthCheck() {
    return { message: 'UP' };
  }
  
  @Post('/pedidos/')
  async createPedido(@Body() createPedidosDto: CreatePedidosDto) {
    return this.apiService.createPedido(createPedidosDto);
  }

  @Patch('/pedidos/:id/status')
  async update(
    @Param('id') id,
    @Body() updatePedidosDto: UpdateStatusPedidoDto,
  ) {
    return await this.apiService.updateOnePedido(id, updatePedidosDto);
  }

  @Get('/pedidos/')
  async findAll() {
    return this.apiService.getAllPedidos();
  }
}
