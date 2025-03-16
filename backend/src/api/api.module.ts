import { Module } from '@nestjs/common';

import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/common/guards/auth.guard';

@Module({
  controllers: [ApiController],
  providers: [
    ApiService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  exports: [ApiService],
})
export class ApiModule {}
