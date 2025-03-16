import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { MyExceptionFilter } from './common/filters/myexception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true })); // Habilita a validação de dados (DTO)
  app.useGlobalFilters(new MyExceptionFilter());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
