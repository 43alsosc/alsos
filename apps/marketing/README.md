# `@alsos/marketing`

Offentlig Alsos-nettside: **TanStack Start**, Vite, Tailwind CSS, deploy til Cloudflare (Wrangler).

> **Fremtidig navn:** Denne appen skal omdøpes til **`portfolio`** (`apps/portfolio`, pakke `@alsos/portfolio`). Ikke bygg nye ting som hardkoder `marketing` uten at det er nødvendig.

## Utvikling

Fra monorepo-roten:

```sh
bun install
bunx turbo dev --filter=@alsos/marketing
```

Eller fra denne mappen:

```sh
bun run dev
```

Standard dev-port er **3000**.

## Bygg og forhåndsvisning

```sh
bun run build
bun run preview
```

## Tester

```sh
bun run test
```

## Deploy

```sh
bun run deploy
```

(Kjører `build` og `wrangler deploy` — sørg for riktig Cloudflare-oppsett.)

## Mer om stacken

- [TanStack Start](https://tanstack.com/start) og [TanStack Router](https://tanstack.com/router) — ruter ligger under `src/routes`
- [Tailwind CSS](https://tailwindcss.com/) — globale stiler og `@alsos/ui`

For detaljer om routing, server functions og API-ruter, se [TanStack Start-dokumentasjonen](https://tanstack.com/start).
