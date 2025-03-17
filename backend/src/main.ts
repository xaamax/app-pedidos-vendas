import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { MyExceptionFilter } from './common/filters/myexception.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import metadata from './metadata';

async function bootstrap() {
  const app = await NestFactory.create<NestApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true })); // Habilita a validação de dados (DTO)
  app.useGlobalFilters(new MyExceptionFilter());
  app.enableCors({origin: '*'});
  // Configuração do Swagger (Documentação da API automáticamente)
  const config = new DocumentBuilder()
    .setTitle('API pedidos')
    .setDescription('API de gerenciamento do projeto pedidos')
    .setVersion('1.0')
    .addTag('pedidos')
    .build();

  // Carrega os metadados do plugin do Swagger (também gerado automáticamente pelo Script swc -b --check-type )
  await SwaggerModule.loadPluginMetadata(metadata);

  // Cria a documentação da API na rota /v1/docs/swagger
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/v1/docs/swagger', app, documentFactory);  

  // Pega a porta via variável de ambiente ou usa a porta 3000
  const configService: ConfigService = app.get(ConfigService);
  const port = configService.get('PORT') || 3000;
  await app.listen(port).then(() => {
    const now = new Date();
    setTimeout(() => {
      console.log(
        `Server running on http://localhost:${port} - ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`,
      );
    }, 1000);
  });
}
bootstrap();
