import { StatusPedido } from "@app/common/types/status-pedido.enum"
import { Produto } from "./Produto"

export interface Pedido {
  cliente: string
  itens: Produto[]
  totalPedido: number
  status: StatusPedido
  dataPedido: Date
}
