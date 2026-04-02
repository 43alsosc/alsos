# Alsos

Monorepo for Alsos, bygget med [Turborepo](https://turborepo.dev) og [Bun](https://bun.sh) som pakkebehandler.

Dette prosjektet er laget for å holde styr på alle prosjektene jeg har jobbet med.

## Apper

| App | Beskrivelse |
|-----|-------------|
| [`apps/marketing`](apps/marketing) | Offentlig nettside: [TanStack Start](https://tanstack.com/start), Vite, Tailwind CSS, deploy til Cloudflare Workers |

**Merk:** Appen heter `marketing` i repoet i dag, men skal på sikt omdøpes til **`portfolio`** (mappe- og pakkenavn `@alsos/portfolio`). Planlegg nye imports og dokumentasjon med det i mente.

## Pakker

| Pakke | Beskrivelse |
|-------|-------------|
| [`@alsos/ui`](packages/ui) | Delt React-komponentbibliotek og stiler |
| [`@alsos/env`](packages/env) | Type-sikre miljøvariabler (`@t3-oss/env`) for delt bruk, Vite og Next.js |
| [`@alsos/eslint-config`](packages/eslint-config) | Felles ESLint-konfigurasjoner |
| [`@alsos/typescript-config`](packages/typescript-config) | Felles `tsconfig`-profiler |

## Kom i gang

```sh
bun install
bun run dev
```

Bygg alt:

```sh
bun run build
```

Kjør mot én app eller pakke med [filter](https://turborepo.dev/docs/crafting-your-repository/running-tasks#using-filters):

```sh
bunx turbo dev --filter=@alsos/marketing
```

## Nyttige skript (rot)

| Skript | Beskrivelse |
|--------|-------------|
| `bun run dev` | Utviklingsmodus for alle workspaces som definerer `dev` |
| `bun run build` | Produksjonsbygg |
| `bun run lint` | ESLint via Turborepo |
| `bun run check-types` | Type-sjekk i workspaces som definerer oppgaven |
| `bun run format` | Prettier på `*.ts`, `*.tsx`, `*.md` |
| `bun run monorepo:lint` | [Sherif](https://github.com/QuiiBz/sherif) for workspace-konsistens |

## Verktøy

- **TypeScript** — statisk typesjekking
- **ESLint** — linting (konfigurasjon i `packages/eslint-config`)
- **Prettier** — formattering (konfigurasjon i rot)

## Turborepo

- [Oppgaver og filtre](https://turborepo.dev/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.dev/docs/crafting-your-repository/caching)
- [Remote caching](https://turborepo.dev/docs/core-concepts/remote-caching) (krever bl.a. Vercel-konto om du vil dele cache i team/CI)
