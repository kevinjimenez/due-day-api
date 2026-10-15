import { RequestMethod, ValidationPipeOptions } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/internal';
import { envs } from './envs';

export const appConfig = {
  prefix: envs.apiPrefix,
  prefixOptions: {
    exclude: [
      { path: 'health', method: RequestMethod.ALL },
      { path: '/', method: RequestMethod.ALL },
    ],
  },
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
