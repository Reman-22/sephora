import { ProductCard } from "@/components/ui/ProductCard";
import { NEW_ARRIVALS, SELLING_FAST } from "@/lib/data";

function ShowcaseGrid({
  title,
  description,
  products,
  id,
}: {
  title: string;
  description?: string;
  products: typeof NEW_ARRIVALS;
  id: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="mx-auto max-w-[var(--container-max)] px-4 py-8 md:px-6 md:py-10"
    >
      <header className="mb-6 flex items-end justify-between">
        <div>
          <h2
            id={`${id}-heading`}
            className="text-lg font-bold uppercase tracking-tight text-neutral-900 md:text-xl"
          >
            {title}
          </h2>
          {description && (
            <p className="mt-1 text-sm text-neutral-600">{description}</p>
          )}
        </div>
      </header>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 md:gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export function ProductShowcase() {
  return (
    <>
      <ShowcaseGrid
        id="new-arrivals"
        title="New Arrivals"
        description="Fresh drops and just-launched favorites."
        products={NEW_ARRIVALS}
      />
      <div className="mx-auto max-w-[var(--container-max)] px-4 md:px-6">
        <hr className="border-neutral-200" />
      </div>
      <ShowcaseGrid
        id="selling-fast"
        title="Selling Fast"
        description="Trending products moving fast across our stores."
        products={SELLING_FAST}
      />
    </>
  );
}
