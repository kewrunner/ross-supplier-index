# Ross Supplier Index

The `supplier-indexer` app is the public-facing MVP for this repository. It presents Ross Stores-related supplier, partner, API-profile, and provenance metadata as a lightweight Next.js site.

## What is included

- Home page with summary metrics and featured records
- Searchable supplier directory with category, source, status, and date filters
- Supplier detail pages with links and provenance
- API profiles page for public ecosystem references
- Sources/methodology page
- Editor draft form for preparing new records

This is a public metadata index. It is not a live inventory system, supplier transaction platform, or official Ross Stores API.

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Verification

```bash
npm run lint
npx next build --webpack
```

## Data model and persistence

Seed records live in `src/data/suppliers.ts`. The editor form is intentionally a client-side MVP draft flow; authentication, database persistence, schema validation on import, and editorial approval are follow-up work for a production deployment.
