import Link from "next/link";
import Image from "next/image";
import { QUICK_LINKS } from "@/lib/data";

export function QuickLinksBanner() {
  return (
    <section
      aria-labelledby="guidance-heading"
      className="mx-auto max-w-[var(--container-max)] px-4 py-10 md:px-6 md:py-16"
    >
      <div className="text-center mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--color-brand-accent)] mb-2">
          Shop By Category
        </p>
        <h2
          id="guidance-heading"
          className="text-2xl font-black uppercase tracking-tight text-neutral-900 md:text-3xl"
        >
          Need a Little Guidance?
        </h2>
        <p className="mt-2 text-sm text-neutral-500 max-w-md mx-auto">
          Explore our handpicked selections curated specifically for your beauty routine.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
        {QUICK_LINKS.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm transition-all duration-300 hover:border-black hover:shadow-lg focus-visible:outline-2 focus-visible:outline-black text-center"
            aria-label={link.label}
          >
            {/* Real Category Image Container */}
            {link.image && (
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-100 mb-3">
                <Image
                  src={link.image}
                  alt={link.label}
                  fill
                  sizes="180px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <span
                  aria-hidden
                  className="absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/95 text-sm shadow-md backdrop-blur"
                >
                  {link.icon}
                </span>
              </div>
            )}

            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-900 transition-colors group-hover:text-[var(--color-brand-accent)]">
              {link.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
