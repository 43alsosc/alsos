# `@alsos/ui`

Delt **React**-komponentbibliotek for Alsos-monorepoet. Bygger på blant annet [Base UI](https://base-ui.com/), [shadcn](https://ui.shadcn.com/)-mønstre, Tailwind og Hugeicons.

## Eksport

| Import | Innhold |
|--------|---------|
| `@alsos/ui/globals.css` | Globale stiler (inkl. Tailwind) |
| `@alsos/ui/components/*` | UI-komponenter |
| `@alsos/ui/lib/*` | Hjelpefunksjoner |
| `@alsos/ui/hooks/*` | React-hooks |

## Utvikling

Fra rot:

```sh
bunx turbo run lint typecheck --filter=@alsos/ui
```

Pakken er `private` og publiseres ikke; konsumeres via `workspace:*` fra apper.
