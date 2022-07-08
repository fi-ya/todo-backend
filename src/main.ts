import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { getEnv } from './config/helpers';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: getEnv('CORS_ALLOWED_ORIGIN'),
  });
  await app.listen(5000);
}
bootstrap();
