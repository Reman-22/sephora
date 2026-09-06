import Link from "next/link";
import type { PromoBanner } from "@/lib/types";
import { PROMO_BANNERS } from "@/lib/data";

const toneClasses: Record<PromoBanner["tone"], string> = {
  purple:
    "bg-gradient-to-br from-purple-700 via-purple-600 to-purple-900 text-white",
  blue: "bg-gradient-to-br from-sky-100 via-blue-50 to-white text-neutral-900",
  green:
    "bg-gradient-to-br from-emerald-200 via-green-100 to-white text-neutral-900",
  pink: "bg-gradient-to-br from-rose-200 via-pink-100 to-white text-neutral-900",
  neutral:
    "bg-gradient-to-br from-neutral-100 to-white text-neutral-900 border border-neutral-200",
};

const accentClasses: Record<PromoBanner["tone"], string> = {
  purple: "bg-white/15 border-white/30 hover:bg-white/25",
  blue: "bg-black text-white hover:bg-neutral-800",
  green: "bg-black text-white hover:bg-neutral-800",
  pink: "bg-black text-white hover:bg-neutral-800",
  neutral: "bg-black text-white hover:bg-neutral-800",
};

function PromoCard({ banner, tall }: { banner: PromoBanner; tall?: boolean }) {
  return (
    <article
      className={[
        toneClasses[banner.tone],
        "relative flex flex-col justify-between overflow-hidden rounded-xl p-6 md:p-8",
        tall ? "row-span-2 min-h-[380px]" : "min-h-[220px]",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-labelledby={`promo-${banner.id}`}
    >
      {/* Decorative circles */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-black/5"
      />

      <div className="relative z-10 flex flex-1 flex-col gap-2">
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] opacity-80">
          {banner.eyebrow}
        </p>
        <h2
          id={`promo-${banner.id}`}
          className={tall ? "text-3xl font-extrabold leading-tight md:text-4xl" : "text-xl font-bold leading-tight md:text-2xl"}
        >
          {banner.title}
        </h2>
        <p className={tall ? "max-w-sm text-sm md:text-base" : "max-w-xs text-xs md:text-sm"}>
          {banner.subtitle}
        </p>
      </div>

      <div className="relative z-10 mt-6">
        <Link
          href="#"
          className={[
            "inline-flex items-center gap-2 rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-wider transition-all duration-[var(--duration-fast)]",
            accentClasses[banner.tone],
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {banner.cta}
          <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
            <path
              d="M5 12h14M13 5l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}

export function HeroBanners() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto max-w-[var(--container-max)] px-4 pt-6 pb-2 md:px-6 md:pt-8"
    >
      <h2 id="hero-heading" className="sr-only">
        Featured promotions
      </h2>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-4 md:grid-rows-2 md:gap-4">
        {/* Column 1: App Fest — tall */}
        <div className="md:col-span-1 md:row-span-2">
          <PromoCard banner={PROMO_BANNERS[0]} tall />
        </div>
        {/* Column 2+3: rhode — wide */}
        <div className="md:col-span-3">
          <PromoCard banner={PROMO_BANNERS[1]} />
        </div>
        {/* Column 2+3: Ultimate — wide */}
        <div className="md:col-span-3">
          <PromoCard banner={PROMO_BANNERS[2]} />
        </div>
      </div>
    </section>
  );
}
