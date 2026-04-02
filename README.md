# Alsos

Monorepo for Alsos, bygget med [Turborepo](https://turborepo.dev) og [Bun](https://bun.sh) som pakkebehandler.

## Apper

| App                                | Beskrivelse                                                                                                         |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| [`apps/marketing`](apps/marketing) | Offentlig nettside: [TanStack Start](https://tanstack.com/start), Vite, Tailwind CSS, deploy til Cloudflare Workers |

**Merk:** Appen heter `marketing` i repoet i dag, men skal på sikt omdøpes til **`portfolio`** (mappe- og pakkenavn `@alsos/portfolio`). Planlegg nye imports og dokumentasjon med det i mente.

## Pakker

| Pakke                                                    | Beskrivelse                                                              |
| -------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`@alsos/ui`](packages/ui)                               | Delt React-komponentbibliotek og stiler                                  |
| [`@alsos/env`](packages/env)                             | Type-sikre miljøvariabler (`@t3-oss/env`) for delt bruk, Vite og Next.js |
| [`@alsos/eslint-config`](packages/eslint-config)         | Felles ESLint-konfigurasjoner                                            |
| [`@alsos/typescript-config`](packages/typescript-config) | Felles `tsconfig`-profiler                                               |

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

## Lokal reverse proxy med Caddy

For HTTPS og eget vertsnavn mot Vite-devserveren kan du bruke [Caddy](https://caddyserver.com/). Start appen først (se over); standard **dev-port for `@alsos/marketing` er 41505** (sjekk `apps/marketing/package.json` om det endres).

### `~/caddyfile`

Lag en Caddyfile i hjemmemappen, f.eks. `~/Caddyfile`. Eksempel som proxyer til Vite og bruker **lokalt tillitsanker** (`tls internal`) for et `.test`-domene eller `.localhost`-domene.

```caddyfile
alsos.localhost {
    reverse_proxy 127.0.0.1:41505
}
```

Standardfilnavn er `Caddyfile` (stor C). Da kan du kjøre fra hjemmemappen:

```sh
caddy run
```

## Next.js med Portless

Når du legger inn en **Next.js**-app i `apps/`, kan du bruke [Portless](https://github.com/vercel-labs/portless) (Vercel Labs): stabile URL-er som `https://<navn>.alsos.localhost` i stedet for `http://localhost:3000`, med **HTTPS** og **HTTP/2** som standard. Dev-serveren får en **tilfeldig port** (typisk 4000–4999) via miljøvariabelen `PORT`, som Next.js respekterer.

### Installasjon

Globalt (anbefalt av upstream) eller som dev-avhengighet i appen:

```sh
bun add -g portless
# eller i apps/<din-next-app>:
bun add -D portless
```

### `package.json` i Next-appen

```json
{
  "scripts": {
    "dev": "portless run next dev"
  }
}
```

Alternativt eksplisitt navn: `portless <navn> next dev` → `https://<navn>.localhost`.

### Fra monorepo-roten

```sh
bunx turbo dev --filter=@alsos/<din-next-app>
```

(Bytt `<din-next-app>` til faktisk pakkenavn når appen finnes.)

### Første kjøring

Portless starter en lokal proxy (standard **443** for HTTPS; kan kreve `sudo` på macOS/Linux). Den genererer et lokalt CA og tilbyr å legge det i systemets tillitslager — kjør `portless trust` senere om du hoppet over.

### Uten Portless (vanlig localhost)

```sh
PORTLESS=0 bun run dev
```

eller kjør `next dev` direkte i appen.

### Caddy vs Portless

- **Caddy** brukes her for `marketing` (Vite) med egen `Caddyfile`.
- For **Next med Portless** trenger du vanligvis **ikke** Caddy for samme app: Portless er allerede reverse proxy + TLS mot `*.localhost`.
- Unngå å stable begge foran samme app uten behov (dobbelt proxy).

### Mer

- Underdomener (`api.app`, `docs.app`), git worktrees, `portless hosts sync` (Safari), og proxy til andre Portless-apper: se [Portless README](https://github.com/vercel-labs/portless/blob/main/README.md).
- Krever **Node.js 20+** (sjekk Portless sine krav ved oppgradering).

## Nyttige skript (rot)

| Skript                  | Beskrivelse                                                         |
| ----------------------- | ------------------------------------------------------------------- |
| `bun run dev`           | Utviklingsmodus for alle workspaces som definerer `dev`             |
| `bun run build`         | Produksjonsbygg                                                     |
| `bun run lint`          | ESLint via Turborepo                                                |
| `bun run check-types`   | Type-sjekk i workspaces som definerer oppgaven                      |
| `bun run format`        | Prettier på `*.ts`, `*.tsx`, `*.md`                                 |
| `bun run monorepo:lint` | [Sherif](https://github.com/QuiiBz/sherif) for workspace-konsistens |

## Verktøy

- **TypeScript** — statisk typesjekking
- **ESLint** — linting (konfigurasjon i `packages/eslint-config`)
- **Prettier** — formattering (konfigurasjon i rot)

## Turborepo

- [Oppgaver og filtre](https://turborepo.dev/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.dev/docs/crafting-your-repository/caching)
- [Remote caching](https://turborepo.dev/docs/core-concepts/remote-caching) (krever bl.a. Vercel-konto om du vil dele cache i team/CI)
