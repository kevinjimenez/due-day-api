import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  NODE_ENV: string;
  CORS_ORIGIN: string;

  RATE_LIMIT_TTL: number;
  RATE_LIMIT_MAX: number;
}

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    NODE_ENV: joi.string().default('local'),
    CORS_ORIGIN: joi.string(),

    RATE_LIMIT_TTL: joi.number().default(60),
    RATE_LIMIT_MAX: joi.number().default(100),
  })
  .unknown(true);

const { error, value } = envsSchema.validate({
  ...process.env,
}) as {
  error?: joi.ValidationError;
  value: EnvVars;
};

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars = value;

export const envs = {
  port: envVars.PORT,
  nodeEnv: envVars.NODE_ENV,
  corsOrigin: envVars.CORS_ORIGIN,

  rateLimitTtl: envVars.RATE_LIMIT_TTL,
  rateLimitMax: envVars.RATE_LIMIT_MAX,
};
