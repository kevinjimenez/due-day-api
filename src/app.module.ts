import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ThrottlerModule } from '@nestjs/throttler';
import { join } from 'path';
import { CommonModule } from './common/common.module';
import { throttlerConfig } from './common/config/throttler.config';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ThrottlerModule.forRoot(throttlerConfig),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      exclude: ['/api/{*path}'], // en Nest 10 o anterior: ['/api*']
    }),
    HealthModule,
    CommonModule,
  ],
})
export class AppModule {}
