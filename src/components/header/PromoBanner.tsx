import Link from "next/link";

export function PromoBanner() {
  return (
    <div
      role="complementary"
      aria-label="Current promotion"
      className="border-b border-neutral-200 bg-white"
    >
      <div className="mx-auto max-w-[var(--container-max)] px-4 md:px-6">
        <div className="flex h-10 items-center justify-center gap-2 text-center text-xs md:text-sm">
          <span className="text-neutral-900">
            Get <strong className="font-bold">50% off*</strong> Select Beauty. Plus,{" "}
            <strong className="font-bold">FREE shipping†</strong> for Beauty Insiders!
          </span>
          <span className="hidden text-neutral-500 md:inline">Terms apply.</span>
          <Link
            href="/offers"
            className="ml-2 inline-flex items-center gap-1 font-semibold uppercase tracking-wider text-black underline decoration-black underline-offset-2 transition-colors hover:text-[var(--color-brand-accent)] hover:decoration-[var(--color-brand-accent)]"
          >
            Shop Now
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
        </div>
      </div>
    </div>
  );
}
