import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { devtools } from "@tanstack/devtools-vite";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";

import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";

const envDir = dirname(fileURLToPath(import.meta.url));

export default defineConfig(async ({ mode }) => {
  Object.assign(process.env, loadEnv(mode, envDir, ""));

  await import("./src/env.ts");

  return {
    resolve: {
      dedupe: ["react", "react-dom"],
    },
    plugins: [
      devtools(),
      cloudflare({ viteEnvironment: { name: "ssr" } }),
      tsconfigPaths({ projects: ["./tsconfig.json"] }),
      tailwindcss(),
      tanstackStart(),
      viteReact(),
    ],
  };
});
