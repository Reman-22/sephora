"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";
import { clsx } from "clsx";

interface CarouselProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  titleSlot?: ReactNode;
  ariaLabel: string;
  className?: string;
  scrollStepPx?: number;
}

export function Carousel({
  children,
  title,
  subtitle,
  titleSlot,
  ariaLabel,
  className,
  scrollStepPx = 320,
}: CarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateEdges = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateEdges();
    const el = scrollerRef.current;
    if (!el) return;
    const handle = () => updateEdges();
    el.addEventListener("scroll", handle, { passive: true });
    const ro = new ResizeObserver(handle);
    ro.observe(el);
    window.addEventListener("resize", handle);
    return () => {
      el.removeEventListener("scroll", handle);
      ro.disconnect();
      window.removeEventListener("resize", handle);
    };
  }, []);

  const scroll = (direction: "next" | "prev") => {
    const el = scrollerRef.current;
    if (!el) return;
    const step =
      direction === "next" ? scrollStepPx : -scrollStepPx;
    el.scrollBy({ left: step, behavior: "smooth" });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scroll("next");
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      scroll("prev");
    }
  };

  return (
    <section aria-label={ariaLabel} className={clsx("py-8 md:py-10", className)}>
      <div className="mx-auto max-w-[var(--container-max)] px-4 md:px-6">
        {(title || titleSlot) && (
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              {titleSlot ?? (
                <h2 className="text-lg font-bold uppercase tracking-tight text-neutral-900 md:text-xl">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="mt-1 text-sm text-neutral-600">{subtitle}</p>
              )}
            </div>
            <div
              role="group"
              aria-label={`Scroll ${ariaLabel}`}
              className="hidden items-center gap-2 md:flex"
            >
              <button
                type="button"
                aria-label="Previous products"
                disabled={!canPrev}
                onClick={() => scroll("prev")}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-900 transition-colors hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-30"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <path
                    d="M15 18l-6-6 6-6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next products"
                disabled={!canNext}
                onClick={() => scroll("next")}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-900 transition-colors hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-30"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <path
                    d="M9 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}

        <div
          ref={scrollerRef}
          role="region"
          aria-label={ariaLabel}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 md:gap-4"
        >
          {children}
        </div>
      </div>
    </section>
  );
}

export function CarouselItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "w-[70vw] flex-none snap-start sm:w-64 md:w-72 lg:w-80",
        className,
      )}
    >
      {children}
    </div>
  );
}
