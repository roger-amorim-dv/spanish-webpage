# Habla Go

First-version multilingual website and student-area prototype for Natalia and José’s Spanish-learning platform.

## Run locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

Spanish is the default language. Brazilian Portuguese and English are available through the persistent language selector. All platform data, courses, reviews, and account behavior are prototypes; see `src/lib/i18n.ts` for content and the member page for isolated display data.
