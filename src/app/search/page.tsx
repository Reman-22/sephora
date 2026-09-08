import Link from "next/link";
import { ProductCard } from "@/components/ui/ProductCard";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { CHOSEN_FOR_YOU, APP_EARLY_ACCESS, NEW_ARRIVALS } from "@/lib/data";

export const dynamic = "force-static";

const ALL_PRODUCTS = [...CHOSEN_FOR_YOU, ...APP_EARLY_ACCESS, ...NEW_ARRIVALS];

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = (q || "").toLowerCase().trim();
  const results = query
    ? ALL_PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query),
      )
    : [];

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-[var(--container-max)] px-4 py-8 md:px-6 md:py-12">
        <header className="mb-6">
          <h1 className="text-2xl font-bold uppercase tracking-tight text-neutral-900 md:text-3xl">
            {query ? `Search results for "${q}"` : "Search"}
          </h1>
          {query && (
            <p className="mt-2 text-sm text-neutral-600">
              {results.length} {results.length === 1 ? "product" : "products"} found
            </p>
          )}
        </header>

        {!query ? (
          <div>
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-neutral-900">
              Popular Searches
            </h2>
            <div className="flex flex-wrap gap-2">
              {["Foundation", "Lipstick", "Serum", "Mascara", "Perfume", "Shampoo", "Moisturizer", "Concealer"].map((term) => (
                <Link
                  key={term}
                  href={`/search?q=${encodeURIComponent(term)}`}
                  className="rounded-full border border-neutral-300 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-900 transition-colors hover:border-black hover:bg-black hover:text-white"
                >
                  {term}
                </Link>
              ))}
            </div>
          </div>
        ) : results.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-lg text-neutral-500">No products found for &ldquo;{q}&rdquo;</p>
            <Link
              href="/"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 underline hover:text-black"
            >
              Back to home
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
