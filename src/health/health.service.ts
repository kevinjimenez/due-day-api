import { Injectable } from '@nestjs/common';
import { envs } from '../common/config/envs';

@Injectable()
export class HealthService {
  public status() {
    return {
      message: 'backend is up and running',
      environment: envs.nodeEnv,
      port: envs.port,
    };
  }
}
