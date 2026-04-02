# `@alsos/typescript-config`

Felles **TypeScript**-profiler for Alsos-monorepoet (base, React-bibliotek, Next.js, TanStack Start).

## Profiler

| Fil | Formål |
|-----|--------|
| `base.json` | Grunnlag for andre profiler |
| `react-library.json` | React-pakker (f.eks. `@alsos/ui`) |
| `nextjs.json` | Next.js-apper |
| `tanstack-start.json` | TanStack Start / Vite-oppsett |

I app- eller pakke-`tsconfig` utvider du én av filene, for eksempel:

```json
"extends": "@alsos/typescript-config/tanstack-start.json"
```

eller `@alsos/typescript-config/base.json`, avhengig av prosjekttypen.

Ingen scripts: ren konfigurasjonspakke.
