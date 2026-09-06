import Link from "next/link";
import Image from "next/image";
import { BEAUTY_OFFERS } from "@/lib/data";
import { clsx } from "clsx";

const tagColorClasses = {
  red: "bg-[var(--color-brand-accent)] text-white",
  orange: "bg-amber-500 text-white",
  purple: "bg-purple-700 text-white",
  pink: "bg-pink-500 text-white",
  black: "bg-black text-white",
};

export function BeautyOffers() {
  return (
    <section
      aria-labelledby="offers-heading"
      className="mx-auto max-w-[var(--container-max)] px-4 py-8 md:px-6 md:py-10"
    >
      <header className="mb-6 flex items-end justify-between">
        <div>
          <h2
            id="offers-heading"
            className="text-lg font-bold uppercase tracking-tight text-neutral-900 md:text-xl"
          >
            Beauty Offers <span className="text-neutral-500">(23)</span>
          </h2>
          <p className="mt-1 text-sm text-neutral-600">
            Exclusive deals for Beauty Insiders — updated weekly.
          </p>
        </div>
        <Link
          href="#all-offers"
          className="hidden text-xs font-semibold uppercase tracking-wider text-neutral-900 underline-offset-4 hover:underline md:inline"
        >
          See all offers
        </Link>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {BEAUTY_OFFERS.map((offer) => (
          <article
            key={offer.id}
            className={clsx(
              "group relative flex flex-col overflow-hidden rounded-xl bg-gradient-to-br transition-shadow duration-[var(--duration-fast)] hover:shadow-lg",
              offer.bgGradient,
            )}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={offer.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span
                className={clsx(
                  "absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider",
                  tagColorClasses[offer.tagColor],
                )}
              >
                {offer.tag}
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-2 p-4">
              <h3 className="text-sm font-bold uppercase tracking-tight text-neutral-900">
                {offer.title}
              </h3>
              <p className="text-xs text-neutral-700">{offer.description}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-3">
                <Link
                  href="#download-app"
                  className="inline-flex items-center rounded-full bg-black px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-white hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Download App
                </Link>
                <Link
                  href={`#offer-${offer.id}`}
                  className="inline-flex items-center rounded-full border border-black px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-black hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  See details
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
