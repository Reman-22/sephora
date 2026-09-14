import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { BEAUTY_OFFERS } from "@/lib/data";
import { clsx } from "clsx";

const tagColorClasses = {
  red: "bg-[var(--color-brand-accent)] text-white",
  orange: "bg-amber-500 text-white",
  purple: "bg-purple-700 text-white",
  pink: "bg-pink-500 text-white",
  black: "bg-black text-white",
};

// Additional mock offers
const EXTRA_OFFERS = [
  ...BEAUTY_OFFERS,
  ...BEAUTY_OFFERS.map((o, i) => ({ ...o, id: `extra-${i}`, tag: i % 2 === 0 ? "NEW" : "VIP" })),
  ...BEAUTY_OFFERS.map((o, i) => ({ ...o, id: `more-${i}`, tag: i % 2 === 0 ? "EXCLUSIVE" : "MEMBERS" })),
];

export default function OffersPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        {/* Hero */}
        <section className="bg-gradient-to-br from-neutral-100 to-white py-10 md:py-14">
          <div className="mx-auto max-w-[var(--container-max)] px-4 text-center md:px-6">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-brand-accent)]">
              Exclusive Offers
            </p>
            <h1 className="mt-2 text-3xl font-extrabold uppercase tracking-tight text-neutral-900 md:text-4xl">
              Sale & Offers
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm text-neutral-600 md:text-base">
              {EXTRA_OFFERS.length} exclusive deals updated weekly. Sign in to Beauty Insider for access to member-only offers.
            </p>
          </div>
        </section>

        {/* Filter tabs */}
        <div className="border-b border-neutral-200 bg-white">
          <div className="mx-auto max-w-[var(--container-max)] px-4 md:px-6">
            <div className="no-scrollbar flex h-12 items-center gap-6 overflow-x-auto whitespace-nowrap">
              <button className="text-xs font-bold uppercase tracking-wider text-black underline decoration-2 underline-offset-8">
                All Offers
              </button>
              <button className="text-xs font-semibold uppercase tracking-wider text-neutral-500 hover:text-black">
                Last Chance
              </button>
              <button className="text-xs font-semibold uppercase tracking-wider text-neutral-500 hover:text-black">
                Beauty Insider
              </button>
              <button className="text-xs font-semibold uppercase tracking-wider text-neutral-500 hover:text-black">
                App Exclusive
              </button>
              <button className="text-xs font-semibold uppercase tracking-wider text-neutral-500 hover:text-black">
                Free Gifts
              </button>
            </div>
          </div>
        </div>

        {/* Offers grid */}
        <section className="mx-auto max-w-[var(--container-max)] px-4 py-8 md:px-6 md:py-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {EXTRA_OFFERS.map((offer) => (
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
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
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
                      className="inline-flex items-center rounded-full bg-black px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-white hover:bg-neutral-800"
                    >
                      Download App
                    </Link>
                    <Link
                      href={`#offer-${offer.id}`}
                      className="inline-flex items-center rounded-full border border-black px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-black hover:bg-black hover:text-white"
                    >
                      See details
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
