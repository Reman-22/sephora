import type { ProductDetails } from "@/lib/product-data";
import { Accordion } from "@/components/ui/Accordion";

export function ProductAccordions({ product }: { product: ProductDetails }) {
  const items = [
    {
      id: "about",
      title: "About the Product",
      defaultOpen: true,
      content: (
        <div className="space-y-3">
          <p>{product.about}</p>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
              What It Is
            </h4>
            <p className="mt-1">{product.shortDescription}</p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
              Key Notes
            </h4>
            <p className="mt-1">Pear · Freesia · Amber · Patchouli</p>
          </div>
        </div>
      ),
    },
    {
      id: "ingredients",
      title: "Ingredients",
      content: (
        <div className="space-y-3">
          <p>
            Formulated without parabens, sulfates, phthalates, and synthetic fragrances.
          </p>
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
            <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-neutral-900">
              Full Ingredients List
            </h4>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-700">
              {product.ingredients.map((ing, i) => (
                <li key={i} className="inline-flex items-center gap-1">
                  <span className="h-1 w-1 rounded-full bg-neutral-400" aria-hidden />
                  {ing}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-[11px] italic text-neutral-500">
            Please refer to the product packaging for the most accurate ingredient list.
          </p>
        </div>
      ),
    },
    {
      id: "how-to-use",
      title: "How to Use",
      content: (
        <div className="space-y-3">
          <p>{product.howToUse}</p>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            <div className="rounded-lg bg-neutral-50 p-3">
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                Step 1
              </p>
              <p className="mt-1 text-xs">Apply to pulse points</p>
            </div>
            <div className="rounded-lg bg-neutral-50 p-3">
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                Step 2
              </p>
              <p className="mt-1 text-xs">Layer with matching products</p>
            </div>
            <div className="rounded-lg bg-neutral-50 p-3">
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                Step 3
              </p>
              <p className="mt-1 text-xs">Reapply as needed</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "shipping",
      title: "Shipping & Returns",
      content: (
        <div className="space-y-2">
          <p>• Free standard shipping on orders $50+</p>
          <p>• Same-day delivery available in select areas</p>
          <p>• Free returns within 60 days</p>
          <p>• Gift wrapping available at checkout</p>
        </div>
      ),
    },
  ];

  return (
    <section
      aria-labelledby="details-heading"
      className="mx-auto max-w-[var(--container-max)] px-4 py-8 md:px-6"
    >
      <h2 id="details-heading" className="sr-only">
        Product details
      </h2>
      <Accordion items={items} />
    </section>
  );
}
