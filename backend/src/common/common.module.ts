import { Global, Module } from '@nestjs/common';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true }),
    DatabaseModule
  ],
  providers: [AppService],
  exports: [AppService,DatabaseModule],
})
export class CommonModule {}
