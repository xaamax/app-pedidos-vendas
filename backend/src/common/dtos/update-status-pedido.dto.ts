import { IsEnum, IsNotEmpty, ValidateNested } from 'class-validator';
import { StatusPedido } from '../types/status-pedido.enum';

export class UpdateStatusPedidoDto {
  @IsNotEmpty({ message: "Status é obrigatório." })
  @IsEnum(StatusPedido, { message: 'Status permitido Pendente/Processado.'})
  readonly status: StatusPedido;

}
