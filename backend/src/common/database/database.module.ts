import { ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Pedidos,
  PedidosSchema,
} from './schemas/pedidos.schema';
import { DatabaseService } from './database.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Pedidos.name, schema: PedidosSchema },
    ]),
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        const options = {
          uri: configService.getOrThrow('MONGODB_URI') 
        };
        return options;
      },
      inject: [ConfigService]
    }),
  ],
  providers: [DatabaseService],
  exports: [MongooseModule, DatabaseService],
})
export class DatabaseModule {}
