import { NestFactory } from '@nestjs/core';
import { PrgressModule } from './prgress.module';

async function bootstrap() {
  const app = await NestFactory.create(PrgressModule);
  await app.listen(3002);
  console.log(`🚀 running on: ${await app.getUrl()} - progress!`);
}
bootstrap();
