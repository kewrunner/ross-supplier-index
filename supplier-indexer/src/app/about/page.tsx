export default function AboutPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-6 py-12">
      <header>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">About</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">Public ecosystem indexer</h1>
      </header>

      <section className="space-y-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-slate-600">
          This project is designed as a metadata-first supplier and partner index for Ross Stores-related public information.
          It consolidates company, portal, API, and public-source references into a searchable web experience.
        </p>
        <p className="text-slate-600">
          The focus is on public discovery, provenance, and structured metadata — not live operational inventory or transactional retail data.
        </p>
      </section>
    </main>
  );
}
