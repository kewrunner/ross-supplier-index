import Link from "next/link";
import { featuredSuppliers } from "@/data/suppliers";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-12">
      <section className="rounded-3xl bg-slate-950 px-8 py-12 text-white shadow-xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
            Ross Stores public ecosystem index
          </p>
          <h1 className="mt-5 text-5xl font-bold tracking-tight">
            Discover supplier and partner metadata at a glance.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            A searchable, schema-first index of public Ross Stores ecosystem signals, supplier portals, and retail operations metadata.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/suppliers"
              className="rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              Browse suppliers
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Indexed records</p>
          <p className="mt-3 text-3xl font-bold text-slate-900">4</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Public sources</p>
          <p className="mt-3 text-3xl font-bold text-slate-900">Portal + docs</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Focus</p>
          <p className="mt-3 text-3xl font-bold text-slate-900">Supplier index</p>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Featured records</h2>
          <Link href="/suppliers" className="text-sm font-semibold text-sky-700 hover:text-sky-800">
            View all →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredSuppliers.map((supplier) => (
            <article key={supplier.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                {supplier.category}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{supplier.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{supplier.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {supplier.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="rounded-full bg-sky-50 px-2 py-1 text-xs font-medium text-sky-700">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
