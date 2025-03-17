import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ItemPedidoDto {
    @IsNotEmpty({ message: "Produto é obrigatório." })
    @IsString({ message: "Produto deve ser uma string."})
    produto: string;
    
    @IsNotEmpty({ message: "Quantidade é obrigatória." })
    @IsNumber({}, { message: "Quantidade deve ser um número." })
    quantidade: number;
    
    @IsNotEmpty({ message: "Preço unitário é obrigatório." })
    @IsNumber({ maxDecimalPlaces: 2 }, { message: "Preço unitário deve ser um decimal." })
    precoUnitario: number;
}