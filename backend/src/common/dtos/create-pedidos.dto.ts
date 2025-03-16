import { ArrayMinSize, IsArray, IsEnum, IsNotEmpty, Matches, ValidateNested } from 'class-validator';
import { StatusPedido } from '../types/status-pedido.enum';
import { ItemPedidoDto } from './item-pedidos.dto';
import { Type } from 'class-transformer';

export class CreatePedidosDto {
  @IsNotEmpty()
  cliente: string;

  @IsNotEmpty()
  totalPedido: number;

  @IsNotEmpty()
  @ValidateNested({ each: true, message: "É necessário fornecer os itens do pedido." })
  @Type(() => ItemPedidoDto)
  @IsArray()
  @ArrayMinSize(1, { message: 'É necessário fornecer no mínimo 1 item.'})
  itens: ItemPedidoDto[];
  
  @IsNotEmpty({ message: "Status é obrigatório." })
  @IsEnum(StatusPedido, { message: 'Status permitido Pendente/Processado.'})
  readonly status: StatusPedido;

  @IsNotEmpty()
  dataPedido: Date;
}
