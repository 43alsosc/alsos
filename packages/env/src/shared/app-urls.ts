import * as z from 'zod';

/**
 * Server-side app URLs (no `VITE_` / `NEXT_PUBLIC_` prefix). Spread into `createEnv({ server: { ... } })`.
 * Apps add their own keys the same way as in edulink (`...commonServerApps.shape`).
 */
export const alsosServerAppUrls = z.object({
  DOMAIN_ROOT: z.url(),
  APP_URL_MARKETING: z.url(),
  APP_URL_CURRENT: z.url(),
});
