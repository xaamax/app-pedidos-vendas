import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import {
  Pedidos,
  PedidosDocument,
} from './schemas/pedidos.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePedidosDto } from 'src/common/dtos/create-pedidos.dto';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectModel(Pedidos.name)
    private readonly pedidoModel: Model<PedidosDocument>,
  ) {}

  async create(
    createPedidosDto: CreatePedidosDto,
  ): Promise<Pedidos> {
    return await this.pedidoModel.create(createPedidosDto);
  }

  async updateOne(
    id: string,
    updatePedidos: Pedidos,
  ){
    return await this.pedidoModel
      .findByIdAndUpdate({ _id: id }, updatePedidos, {
        returnDocument: 'after',
      })
      .exec();
  }

  async findAll(): Promise<Pedidos[]> {
    return this.pedidoModel.find().exec();
  }

  async findOne(id: string) {
    return this.pedidoModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    return await this.pedidoModel
      .findByIdAndDelete({ _id: id })
      .exec();
  }

}
