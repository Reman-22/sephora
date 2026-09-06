import Link from "next/link";
import { PAYMENT_FEATURES } from "@/lib/data";

export function PaymentBanner() {
  return (
    <section
      aria-labelledby="payment-heading"
      className="bg-neutral-50 py-10 md:py-12"
    >
      <div className="mx-auto max-w-[var(--container-max)] px-4 md:px-6">
        <h2 id="payment-heading" className="sr-only">
          Payment and delivery features
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {PAYMENT_FEATURES.map((feature) => (
            <article
              key={feature.id}
              className="group flex flex-col items-start gap-3 rounded-xl border border-neutral-200 bg-white p-6 transition-shadow duration-[var(--duration-fast)] hover:shadow-md"
            >
              <span
                aria-hidden
                className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-2xl transition-transform group-hover:scale-110"
              >
                {feature.icon}
              </span>
              <h3 className="text-sm font-bold uppercase tracking-tight text-neutral-900">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                {feature.description}
              </p>
              {feature.cta && (
                <Link
                  href="#"
                  className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-900 underline-offset-4 hover:underline"
                >
                  {feature.cta}
                  <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3">
                    <path
                      d="M5 12h14M13 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
