import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { METHODS } from 'http';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  app.enableCors({
    origin: 'http://localhost:5173',
    METHODS: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    Credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
