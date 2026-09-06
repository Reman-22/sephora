import { Carousel, CarouselItem } from "@/components/ui/Carousel";
import { ProductCard } from "@/components/ui/ProductCard";
import { APP_EARLY_ACCESS } from "@/lib/data";

export function AppEarlyAccess() {
  return (
    <section
      aria-labelledby="early-access-heading"
      className="bg-neutral-50 py-8 md:py-10"
    >
      <div className="mx-auto max-w-[var(--container-max)] px-4 md:px-6">
        <Carousel
          ariaLabel="24-hour app early access products"
          scrollStepPx={420}
          titleSlot={
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <circle cx="12" cy="13" r="7" stroke="currentColor" strokeWidth="1.8" />
                  <path
                    d="M12 10v3l2 1M9 4h6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <h2
                  id="early-access-heading"
                  className="text-lg font-bold uppercase tracking-tight text-neutral-900 md:text-xl"
                >
                  24-Hr App Early Access
                </h2>
                <p className="text-sm text-neutral-600">
                  Shop new launches before anyone else — only in the Sephora app.
                </p>
              </div>
            </div>
          }
        >
          {APP_EARLY_ACCESS.map((product) => (
            <CarouselItem key={product.id}>
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
