import { config as baseConfig } from "./base.js";
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import { tanstackConfig } from "@tanstack/eslint-config";

/**
 * A custom ESLint configuration for libraries that use Tanstack.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const tanstackConfig = [
  ...baseConfig,
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  ...tanstackConfig,
];
