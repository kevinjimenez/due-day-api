import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { CommonModule } from './common/common.module';
import { throttlerConfig } from './common/config/throttler.config';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ThrottlerModule.forRoot(throttlerConfig),
    HealthModule,
    CommonModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
