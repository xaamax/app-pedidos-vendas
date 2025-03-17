import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from './common/common.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), CommonModule, ApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
