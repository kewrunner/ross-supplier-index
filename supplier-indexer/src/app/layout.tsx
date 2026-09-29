import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ross Supplier Index",
  description: "Public supplier and partner ecosystem metadata index for Ross Stores.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full bg-slate-50 text-slate-900">
        <div className="mx-auto max-w-7xl px-4 pt-5">
          <header className="mb-6 flex items-center justify-between rounded-full border border-slate-200 bg-white px-5 py-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">R</div>
              <div>
                <div className="text-sm font-semibold text-slate-900">Ross Supplier Index</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">public metadata</div>
              </div>
            </div>
            <nav className="flex items-center gap-5 text-sm font-medium text-slate-600">
              <Link href="/" className="hover:text-slate-900">Home</Link>
              <Link href="/suppliers" className="hover:text-slate-900">Suppliers</Link>
              <Link href="/apis" className="hover:text-slate-900">API profiles</Link>
              <Link href="/sources" className="hover:text-slate-900">Sources</Link>
              <Link href="/about" className="hover:text-slate-900">About</Link>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
