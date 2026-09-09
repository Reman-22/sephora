"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { clsx } from "clsx";

const REGIONS = [
  { code: "SY", name: "Syria", currency: "SYP", flag: "🇸🇾" },
  { code: "US", name: "United States", currency: "USD", flag: "🇺🇸" },
  { code: "CA", name: "Canada", currency: "CAD", flag: "🇨🇦" },
  { code: "GB", name: "United Kingdom", currency: "GBP", flag: "🇬🇧" },
  { code: "FR", name: "France", currency: "EUR", flag: "🇫🇷" },
];

export function UtilityBar() {
  const [regionOpen, setRegionOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(REGIONS[0]);
  const regionRef = useRef<HTMLDivElement>(null);
  const currentLocale = typeof window !== "undefined" ? (window.location.pathname.split("/")[1] || "en") : "en";
  const otherLocale = currentLocale === "en" ? "ar" : "en";

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (regionRef.current && !regionRef.current.contains(e.target as Node)) {
        setRegionOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleLanguage = () => {
    const newPath = window.location.pathname.replace(`/${currentLocale}`, `/${otherLocale}`);
    window.location.href = newPath;
  };

  return (
    <div className="bg-[#FAFAFA] border-b border-neutral-200">
      <div className="mx-auto max-w-[var(--container-max)] px-4 md:px-6">
        <div className="flex h-10 items-center justify-between text-xs">
          {/* Region Selector */}
          <div ref={regionRef} className="relative">
            <button
              type="button"
              onClick={() => setRegionOpen(!regionOpen)}
              aria-expanded={regionOpen}
              aria-haspopup="listbox"
              className="group flex items-center gap-1.5 text-neutral-700 hover:text-black transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                <path d="M2 12h20M12 2c2.5 2.5 4 6 4 10s-1.5 7.5-4 10c-2.5-2.5-4-6-4-10s1.5-7.5 4-10z" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <span className="font-medium">
                {selectedRegion.flag} {selectedRegion.name} | EN
              </span>
              <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 transition-transform" aria-hidden>
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {regionOpen && (
              <div
                role="listbox"
                aria-label="Select region"
                className="absolute top-full left-0 mt-1 w-64 rounded-lg border border-neutral-200 bg-white shadow-lg z-50"
              >
                {REGIONS.map((region) => (
                  <button
                    key={region.code}
                    role="option"
                    aria-selected={region.code === selectedRegion.code}
                    onClick={() => {
                      setSelectedRegion(region);
                      setRegionOpen(false);
                    }}
                    className={clsx(
                      "flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors",
                      region.code === selectedRegion.code
                        ? "bg-neutral-100 font-medium"
                        : "hover:bg-neutral-50",
                    )}
                  >
                    <span className="text-lg">{region.flag}</span>
                    <div className="flex-1">
                      <div className="font-medium text-neutral-900">{region.name}</div>
                      <div className="text-xs text-neutral-500">{region.currency}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Utility Links */}
          <div className="hidden items-center gap-6 md:flex">
            <Link
              href="#stores"
              className="group flex flex-col items-start text-neutral-700 hover:text-black transition-colors"
            >
              <span className="font-semibold">Shop Store & Delivery</span>
              <span className="text-[10px] text-neutral-500 group-hover:underline">
                Choose your store & location
              </span>
            </Link>
            <Link
              href="#services"
              className="font-semibold text-neutral-700 hover:text-black hover:underline transition-colors"
            >
              Services & Events
            </Link>
          </div>

          {/* Language Toggle Button */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="group flex items-center gap-1.5 rounded-full bg-neutral-200 px-3 py-1 text-xs font-bold uppercase tracking-wider text-neutral-900 transition-all hover:bg-black hover:text-white"
            title={`Switch to ${otherLocale === "en" ? "Arabic" : "English"}`}
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
              <path d="M2 12h20" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 2c2.5 2.5 4 6 4 10s-1.5 7.5-4 10" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 2c-2.5 2.5-4 6-4 10s1.5 7.5 4 10" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10 10c-1.5-1-3-1.5-4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M14 10c1.5-1 3-1.5 4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="8" cy="14" r="1" fill="currentColor" />
              <circle cx="16" cy="14" r="1" fill="currentColor" />
            </svg>
            <span>{currentLocale === "en" ? "EN" : "عربي"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
