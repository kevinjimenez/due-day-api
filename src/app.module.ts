import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { CommonModule } from './common/common.module';
import { throttlerConfig } from './common/config/throttler.config';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    ThrottlerModule.forRoot(throttlerConfig),
    HealthModule,
    CommonModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
