import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  await app.listen(3000);
  console.log(`🚀 running on: ${await app.getUrl()} - user!`);
}
bootstrap();
