# `@alsos/env`

**Type-sikre miljøvariabler** med [Zod](https://zod.dev/) og [`@t3-oss/env`](https://env.t3.gg/), delt på tvers av apper i monorepoet.

## Eksport

| Modul | Bruk |
|-------|------|
| `@alsos/env/shared` | Felles validering på tvers av miljøer |
| `@alsos/env/vite` | Vite-baserte apper |
| `@alsos/env/next` | Next.js-apper |

Bygg kjøres automatisk ved `prepare` slik at `dist/` er tilgjengelig for avhengige workspaces.

## Utvikling

```sh
bunx turbo run build check-types lint --filter=@alsos/env
```

Pakken er `private` og publiseres ikke.
