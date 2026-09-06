import Image from "next/image";
import Link from "next/link";
import { REWARDS } from "@/lib/data";

export function BeautyInsiderRewards() {
  return (
    <section
      aria-labelledby="rewards-heading"
      className="bg-neutral-50 py-10 md:py-14"
    >
      <div className="mx-auto max-w-[var(--container-max)] px-4 md:px-6">
        <header className="mb-8 flex flex-col items-start gap-3 md:flex-row md:items-end md:justify-between">
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path
                  d="M12 2l2.5 5.5L20 8l-4 4 1 5.5-5-3-5 3 1-5.5-4-4 5.5-.5z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div>
              <h2
                id="rewards-heading"
                className="text-lg font-bold uppercase tracking-tight text-neutral-900 md:text-xl"
              >
                Beauty Insider Rewards
              </h2>
              <p className="text-sm text-neutral-600">
                Redeem your points for deluxe samples, full-size products, and exclusive experiences.
              </p>
            </div>
          </div>
          <Link
            href="#signin"
            className="text-xs font-semibold uppercase tracking-wider text-neutral-900 underline-offset-4 hover:underline"
          >
            Sign In to Access
          </Link>
        </header>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {REWARDS.map((reward) => (
            <article
              key={reward.id}
              className="group flex flex-col rounded-xl bg-white p-4 transition-shadow duration-[var(--duration-fast)] hover:shadow-md"
            >
              <div className="relative mb-3 aspect-square w-full overflow-hidden rounded-md bg-neutral-100">
                <Image
                  src={reward.image}
                  alt={`${reward.brand} ${reward.title}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                {reward.brand}
              </p>
              <h3 className="mt-1 line-clamp-2 text-sm font-semibold text-neutral-900">
                {reward.title}
              </h3>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm font-bold text-neutral-900">
                  {reward.points} points
                </span>
                <Link
                  href="#signin"
                  className="inline-flex items-center rounded-full border border-black px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-black transition-colors hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-black"
                >
                  Sign In
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
