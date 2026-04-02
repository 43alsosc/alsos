import { alsosServerAppUrls } from "@alsos/env/vite";
import { createEnv } from "@t3-oss/env-core";
import z from "zod";

export const env = createEnv({
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