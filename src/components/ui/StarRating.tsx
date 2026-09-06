import { clsx } from "clsx";

interface StarRatingProps {
  rating: number;
  reviewCount: number;
  size?: "sm" | "md";
  className?: string;
}

/**
 * Displays 5-star rating with review count.
 * rating is on 0–5 scale with up to 1 decimal.
 * Format reviewCount: 1.5K, 12K, etc.
 */
function formatReviewCount(count: number): string {
  if (count >= 1000) {
    const k = count / 1000;
    return k >= 10 ? `${Math.round(k)}K` : `${k.toFixed(1)}K`;
  }
  return String(count);
}

export function StarRating({
  rating,
  reviewCount,
  size = "md",
  className,
}: StarRatingProps) {
  const clamped = Math.max(0, Math.min(5, rating));
  const full = Math.floor(clamped);
  const hasHalf = clamped - full >= 0.25 && clamped - full < 0.75;
  const empty = 5 - full - (hasHalf ? 1 : 0);

  const starSize = size === "sm" ? "h-3 w-3" : "h-4 w-4";

  return (
    <div
      role="img"
      aria-label={`Rated ${clamped.toFixed(1)} out of 5 stars, ${reviewCount} reviews`}
      className={clsx("inline-flex items-center gap-1.5", className)}
    >
      <span className="inline-flex items-center gap-0.5" aria-hidden>
        {Array.from({ length: full }).map((_, i) => (
          <svg
            key={`f-${i}`}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={clsx(starSize, "text-amber-400")}
          >
            <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.5L6 22l1.5-7.2L2 10l7.1-1.1z" />
          </svg>
        ))}
        {hasHalf && (
          <svg
            viewBox="0 0 24 24"
            className={clsx(starSize, "text-amber-400")}
          >
            <defs>
              <linearGradient id={`half-${clamped}`}>
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="#e5e7eb" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#half-${clamped})`}
              d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.5L6 22l1.5-7.2L2 10l7.1-1.1z"
            />
          </svg>
        )}
        {Array.from({ length: empty }).map((_, i) => (
          <svg
            key={`e-${i}`}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={clsx(starSize, "text-neutral-300")}
          >
            <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.5L6 22l1.5-7.2L2 10l7.1-1.1z" />
          </svg>
        ))}
      </span>
      <span className="text-xs font-medium text-neutral-600">
        ({formatReviewCount(reviewCount)})
      </span>
    </div>
  );
}
