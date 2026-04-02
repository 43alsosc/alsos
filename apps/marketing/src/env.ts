import * as z from 'zod';
import {
  alsosServerAppUrls,
  createEnv,
} from '@alsos/env/vite';

/**
 * App-local env: add keys here or compose extra `z.object({ ... }).shape` spreads (edulink-style).
 */
export const env = createEnv({
  clientPrefix: 'VITE_',
  client: {
  },
  server: {
    ...alsosServerAppUrls.shape,
    NODE_ENV: z.string().optional(),
  },
  runtimeEnv: {
    ...import.meta.env,
    DOMAIN_ROOT: process.env.DOMAIN_ROOT,
    APP_URL_MARKETING: process.env.APP_URL_MARKETING,
    APP_URL_CURRENT: process.env.APP_URL_CURRENT,
    NODE_ENV: process.env.NODE_ENV,
  },
  emptyStringAsUndefined: true,
});
