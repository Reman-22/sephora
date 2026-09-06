import type { ProductDetails } from "@/lib/product-data";

export function ProductHighlights({ product }: { product: ProductDetails }) {
  return (
    <section
      aria-labelledby="highlights-heading"
      className="mx-auto max-w-[var(--container-max)] px-4 py-8 md:px-6"
    >
      <h2 id="highlights-heading" className="sr-only">
        Product highlights
      </h2>
      <div className="rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white p-6 md:p-8">
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {product.highlights.map((highlight, index) => (
            <li
              key={index}
              className="flex flex-col items-center gap-3 text-center"
            >
              <span
                aria-hidden
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl shadow-sm ring-1 ring-neutral-200 transition-transform hover:scale-110"
              >
                {highlight.icon}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                {highlight.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
