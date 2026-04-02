import * as z from 'zod';

/**
 * Optional absolute URL for browser-exposed APIs.
 * Map to `VITE_*` client keys or `NEXT_PUBLIC_*` in each app’s `env` module.
 */
export const optionalPublicUrl = z.url().optional();
