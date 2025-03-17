import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ItemPedidoDto } from 'src/common/dtos/item-pedidos.dto';

// Habilita o timestamps para created/modified automaticamente
// Remove o controle de versão de esquemas (field _version)
@Schema({ timestamps: true, versionKey: false, toJSON: { 
  virtuals: true,
  transform: (_, ret) => {
    ret.id = ret._id.toString();
    delete ret._id;
  }  
} })
export class Pedidos {
  _id!: string;

  @Prop()
  cliente: string;

  @Prop()
  totalPedido: number;

  @Prop()
  itens: ItemPedidoDto[];

  @Prop()
  status: string;

  @Prop()
  dataPedido: Date;   

  createdAt: Date;
  updatedAt: Date;
}
export type PedidosDocument = HydratedDocument<Pedidos>;
export const PedidosSchema = SchemaFactory.createForClass(Pedidos);
