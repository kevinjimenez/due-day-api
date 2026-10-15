import { CorsOptions } from '@nestjs/common/internal';
import { envs } from './envs';

export const appConfig = {
  cors: {
    origin: envs.corsOrigin,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
  } satisfies CorsOptions,
};
