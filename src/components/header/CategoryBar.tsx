"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { clsx } from "clsx";
import { MegaMenu, getCategoryMenu } from "./MegaMenu";

const CATEGORIES = [
  { label: "New", href: "/category/new" },
  { label: "50% Off Deals", href: "/category/deals" },
  { label: "Makeup", href: "/category/makeup" },
  { label: "Skincare", href: "/category/skincare" },
  { label: "Fragrance", href: "/category/fragrance" },
  { label: "Hair", href: "/category/hair" },
  { label: "Bath & Body", href: "/category/bath-body" },
  { label: "Mini Size", href: "/category/mini" },
  { label: "Brands", href: "/category/brands" },
  { label: "Gifts & Value Sets", href: "/category/gifts" },
  { label: "Gift Cards", href: "/category/gift-cards" },
  { label: "Sale & Offers", href: "/category/sale" },
];

export function CategoryBar() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [arrowLeft, setArrowLeft] = useState<number | string>("50%");
  const barRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close mega menu when mouse leaves the bar
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenCategory(null);
    }, 150);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const updateArrowPosition = (target: HTMLButtonElement) => {
    if (!barRef.current) return;
    const barRect = barRef.current.getBoundingClientRect();
    const btnRect = target.getBoundingClientRect();
    // Center point of button relative to the bar container
    const leftOffset = btnRect.left - barRect.left + btnRect.width / 2;
    setArrowLeft(leftOffset);
  };

  // Handle ESC key to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenCategory(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const activeMenu = openCategory ? getCategoryMenu(openCategory) : undefined;

  return (
    <>
      <nav
        ref={barRef}
        aria-label="Main categories"
        className="sticky top-[80px] z-30 bg-black text-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] -translate-y-4 rounded-none relative"
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        {/* Desktop */}
        <div className="mx-auto hidden max-w-[var(--container-max)] px-6 md:block">
          <ul className="flex h-12 items-center gap-6 whitespace-nowrap">
            {CATEGORIES.map((cat) => {
              const hasMenu = getCategoryMenu(cat.label);
              const isOpen = openCategory === cat.label;
              return (
                <li key={cat.label} className="relative h-full flex items-center">
                  <button
                    type="button"
                    aria-haspopup={hasMenu ? "true" : undefined}
                    aria-expanded={hasMenu ? isOpen : undefined}
                    onMouseEnter={(e) => {
                      updateArrowPosition(e.currentTarget);
                      if (hasMenu) setOpenCategory(cat.label);
                    }}
                    onFocus={(e) => {
                      updateArrowPosition(e.currentTarget);
                      if (hasMenu) setOpenCategory(cat.label);
                    }}
                    onClick={(e) => {
                      updateArrowPosition(e.currentTarget);
                      if (hasMenu) {
                        setOpenCategory(isOpen ? null : cat.label);
                      }
                    }}
                    className={clsx(
                      "group relative inline-flex h-full items-center text-xs font-semibold uppercase tracking-[0.15em] transition-colors hover:text-white",
                      isOpen ? "text-white" : "text-neutral-300",
                    )}
                  >
                    {cat.label}
                    {cat.label === "50% Off Deals" && (
                      <span className="ml-2 rounded-full bg-[var(--color-brand-accent)] px-2 py-0.5 text-[9px] font-bold tracking-wider">
                        HOT
                      </span>
                    )}
                    {cat.label === "Sale & Offers" && (
                      <span className="ml-2 rounded-full bg-[var(--color-brand-accent)] px-2 py-0.5 text-[9px] font-bold tracking-wider">
                        %
                      </span>
                    )}
                    <span
                      aria-hidden
                      className={clsx(
                        "absolute -bottom-[1px] left-0 h-[2px] w-full origin-left bg-white transition-transform duration-[var(--duration-fast)]",
                        isOpen ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                      )}
                    />

                    {/* Small arrow indicator pointing down into the white megamenu below - centered perfectly on word */}
                    {isOpen && (
                      <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 text-white text-[9px] leading-none transition-transform animate-bounce z-50 animate-duration-500" aria-hidden>
                        ▼
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center justify-between px-4 py-3 md:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
            Menu
          </button>
          <span className="text-2xl font-extrabold tracking-[0.14em]">SEPHORA</span>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="border-t border-white/10 md:hidden">
            <ul className="flex flex-col">
              {CATEGORIES.map((cat) => (
                <li key={cat.label}>
                  <Link
                    href={cat.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between px-5 py-3.5 text-sm font-medium text-white hover:bg-white/10"
                  >
                    <span>{cat.label}</span>
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Mega Menu dropdown — rendered as absolute with maximum z-index to sit on top of all page elements */}
      {activeMenu && openCategory && (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="absolute top-full left-0 right-0 z-[100] border-b border-neutral-200 bg-white shadow-2xl transition-all duration-300"
        >
          {/* Subtle triangle arrow pointing up to the pressed category word on the black bar - dynamically positioned under clicked word */}
          <div
            className="absolute -top-2 h-0 w-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-white z-[100] transition-all duration-300 -translate-x-1/2"
            style={{ left: arrowLeft }}
          />
          <MegaMenu data={activeMenu} />
        </div>
      )}
    </>
  );
}
