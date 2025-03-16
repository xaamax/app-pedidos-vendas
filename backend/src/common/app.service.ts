import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/common/database/database.service';
  
  @Injectable()
  export class AppService {
    constructor(private readonly databaseService: DatabaseService) {}
  
    // TODO: criar o DTO e implementar aqui
    async createPedido(createDto: any) {
      return this.databaseService.create(createDto);
    }
  
    async findAllPedidos() {
      return this.databaseService.findAll();
    }
  
    async getPedidoById(id: string) {
      return this.databaseService.findOne(id);
    }
  
    async deletePedidoById(id: string) {
      return this.databaseService.delete(id);
    }
  
    // TODO: criar o DTO e implementar aqui
    async updateOnePedido(id: string, updateDto: any) {
      return this.databaseService.updateOne(id, updateDto);
    }
  }
  