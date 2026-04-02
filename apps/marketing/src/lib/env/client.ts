import { createEnv } from "@t3-oss/env-core";
import z from "zod";

export const env = createEnv({
  clientPrefix: "VITE_PUBLIC_",
  client: {
    VITE_PUBLIC_NODE_ENV: z.string().optional(),
  },
  runtimeEnv: {
    VITE_PUBLIC_NODE_ENV: process.env.NODE_ENV,
  },
});
