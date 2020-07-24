import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import 'source-map-support/register';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(5000);
}
bootstrap();
