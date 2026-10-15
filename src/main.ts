import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appConfig } from './common/config/app.config';
import { envs } from './common/config/envs';

const logger = new Logger('Bootstrap');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(appConfig.cors);

  await app.listen(envs.port);
  logger.log(`Environment: ${envs.nodeEnv}`);
  logger.log(`Server running on: ${await app.getUrl()}`);
}
void bootstrap();
