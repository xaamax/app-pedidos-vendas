/* eslint-disable */
export default async () => {
    const t = {
        ["./common/dtos/item-pedidos.dto"]: await import("./common/dtos/item-pedidos.dto"),
        ["./common/types/status-pedido.enum"]: await import("./common/types/status-pedido.enum"),
        ["./common/database/schemas/pedidos.schema"]: await import("./common/database/schemas/pedidos.schema")
    };
    return { "@nestjs/swagger": { "models": [[import("./common/dtos/item-pedidos.dto"), { "ItemPedidoDto": { produto: { required: true, type: () => String }, quantidade: { required: true, type: () => Number }, precoUnitario: { required: true, type: () => Number } } }], [import("./common/dtos/create-pedidos.dto"), { "CreatePedidosDto": { cliente: { required: true, type: () => String }, totalPedido: { required: true, type: () => Number }, itens: { required: true, type: () => [t["./common/dtos/item-pedidos.dto"].ItemPedidoDto], minItems: 1 }, status: { required: true, enum: t["./common/types/status-pedido.enum"].StatusPedido }, dataPedido: { required: true, type: () => Date } } }], [import("./common/dtos/update-status-pedido.dto"), { "UpdateStatusPedidoDto": { status: { required: true, enum: t["./common/types/status-pedido.enum"].StatusPedido } } }]], "controllers": [[import("./api/api.controller"), { "ApiController": { "healthCheck": {}, "createPedido": { type: t["./common/database/schemas/pedidos.schema"].Pedidos }, "update": { type: Object }, "findAll": { type: [t["./common/database/schemas/pedidos.schema"].Pedidos] } } }]] } };
};