import { ValidationPipeOptions } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/internal';
import { envs } from './envs';

export const appConfig = {
  validation: {
    whitelist: true,
    forbidNonWhitelisted: true,
  } satisfies ValidationPipeOptions,
  cors: {
    origin: envs.corsOrigin,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
  } satisfies CorsOptions,
};
