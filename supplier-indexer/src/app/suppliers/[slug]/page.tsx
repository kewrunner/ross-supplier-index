import Link from "next/link";
import { notFound } from "next/navigation";
import { suppliers } from "@/data/suppliers";

export default async function SupplierDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supplier = suppliers.find((item) => item.slug === slug);

  if (!supplier) {
    notFound();
  }

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-12">
      <Link href="/suppliers" className="text-sm font-medium text-sky-700 hover:text-sky-800">
        ← Back to directory
      </Link>

      <header className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">{supplier.category}</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">{supplier.name}</h1>
          </div>
          <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700">
            {supplier.status}
          </div>
        </div>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{supplier.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {supplier.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Overview</h2>
          <dl className="mt-4 space-y-4 text-sm text-slate-600">
            <div>
              <dt className="font-medium text-slate-800">Partner type</dt>
              <dd>{supplier.partnerType}</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-800">Website</dt>
              <dd>
                <a href={supplier.website} target="_blank" rel="noreferrer" className="text-sky-700 hover:text-sky-800">
                  {supplier.website}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-slate-800">Source type</dt>
              <dd>{supplier.sourceType}</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-800">Last updated</dt>
              <dd>{supplier.lastUpdated}</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Highlights</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {supplier.highlights.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Source provenance</h2>
        <a href={supplier.sourceUrl} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sky-700 hover:text-sky-800">
          {supplier.sourceUrl}
        </a>
      </section>
    </main>
  );
}
