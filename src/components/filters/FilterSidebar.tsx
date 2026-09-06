"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { clsx } from "clsx";

// ============================================================================
// Category Tree Data
// ============================================================================
export interface SubCategory {
  label: string;
  slug: string;
  count: number;
}

export interface CategoryNode {
  label: string;
  slug: string;
  children?: SubCategory[];
}

const CATEGORY_TREES: Record<string, CategoryNode> = {
  makeup: {
    label: "Makeup",
    slug: "makeup",
    children: [
      { label: "Foundation", slug: "foundation", count: 148 },
      { label: "Contour", slug: "contour", count: 59 },
      { label: "Concealer", slug: "concealer", count: 101 },
      { label: "Setting Spray & Powder", slug: "setting", count: 177 },
      { label: "Highlighter", slug: "highlighter", count: 122 },
      { label: "Face Primer", slug: "primer", count: 153 },
      { label: "Tinted Moisturizer", slug: "tinted", count: 60 },
      { label: "Face Sets", slug: "face-sets", count: 33 },
      { label: "BB & CC Cream", slug: "bb-cc", count: 17 },
      { label: "Color Correct", slug: "color-correct", count: 36 },
    ],
  },
  skincare: {
    label: "Skincare",
    slug: "skincare",
    children: [
      { label: "Moisturizers", slug: "moisturizers", count: 289 },
      { label: "Cleansers", slug: "cleansers", count: 198 },
      { label: "Serums", slug: "serums", count: 245 },
      { label: "Masks", slug: "masks", count: 132 },
      { label: "Eye Treatments", slug: "eye-treatments", count: 67 },
      { label: "Sun Care", slug: "sun-care", count: 94 },
      { label: "Exfoliators", slug: "exfoliators", count: 78 },
    ],
  },
  fragrance: {
    label: "Fragrance",
    slug: "fragrance",
    children: [
      { label: "Women's Perfume", slug: "women", count: 320 },
      { label: "Men's Cologne", slug: "men", count: 180 },
      { label: "Rollerballs", slug: "rollerballs", count: 95 },
      { label: "Candles", slug: "candles", count: 64 },
      { label: "Gift Sets", slug: "gift-sets", count: 48 },
    ],
  },
  hair: {
    label: "Hair",
    slug: "hair",
    children: [
      { label: "Shampoo", slug: "shampoo", count: 215 },
      { label: "Conditioner", slug: "conditioner", count: 189 },
      { label: "Styling", slug: "styling", count: 167 },
      { label: "Treatments", slug: "treatments", count: 134 },
      { label: "Tools", slug: "tools", count: 87 },
    ],
  },
};

interface FilterSidebarProps {
  activeCategory?: string;
  activeSubcategory?: string;
}

// ============================================================================
// Internal Custom Accordion Module for Sidebar
// ============================================================================
interface FilterAccordionProps {
  id: string;
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

function FilterBlock({ id, title, children, defaultOpen = false }: FilterAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-xl border border-neutral-200/60 bg-white shadow-sm transition-all duration-300 hover:border-neutral-300">
      <h3>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={`filter-panel-${id}`}
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left text-xs font-bold uppercase tracking-wider text-neutral-900 transition-colors hover:bg-neutral-50 rounded-xl"
        >
          <span>{title}</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
            className={clsx(
              "h-4 w-4 shrink-0 text-neutral-500 transition-transform duration-300",
              isOpen && "rotate-180 text-black"
            )}
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </h3>
      <div
        id={`filter-panel-${id}`}
        role="region"
        className={clsx(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100 border-t border-neutral-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="p-4 text-sm leading-relaxed text-neutral-700">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Modern Refatted Filter Sidebar Component
// ============================================================================
export function FilterSidebar({ activeCategory, activeSubcategory }: FilterSidebarProps) {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300]);
  const [brandSearch, setBrandSearch] = useState("");

  const activeTree = activeCategory ? CATEGORY_TREES[activeCategory] : null;

  const brands = [
    "Augustinus Bader", "Bobbi Brown", "Charlotte Tilbury", "Chanel",
    "Dior", "Drunk Elephant", "FENTY BEAUTY", "Glow Recipe",
    "Jo Malone London", "Kiehl's", "Laneige", "Le Labo",
    "MAC Cosmetics", "NARS", "Olaplex", "Rare Beauty",
    "Tatcha", "Too Faced",
  ].filter((b) => b.toLowerCase().includes(brandSearch.toLowerCase()));

  return (
    <aside
      aria-label="Filter products"
      className="w-full shrink-0 md:w-64 lg:w-72 space-y-4"
    >
      {/* Outer Sidebar Container Wrapper with smooth border-radius & soft shadow */}
      <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/30 p-4 shadow-sm space-y-3">
        
        {/* Active Category Tree */}
        {activeTree && (
          <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
            <Link
              href={`/category/${activeTree.slug}`}
              className="mb-3 block text-xs font-black uppercase tracking-[0.15em] text-neutral-900 hover:underline hover:text-[var(--color-brand-accent)] transition-colors"
            >
              {activeTree.label}
            </Link>
            <ul className="flex flex-col gap-1">
              {activeTree.children?.map((child) => {
                const isSelected = activeSubcategory === child.slug;
                return (
                  <li key={child.slug}>
                    <Link
                      href={`/category/${activeTree.slug}/${child.slug}`}
                      className={clsx(
                        "flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-all duration-200",
                        isSelected
                          ? "bg-black font-semibold text-white shadow-sm"
                          : "text-neutral-700 hover:bg-neutral-100 hover:text-black",
                      )}
                    >
                      <span className="flex items-center gap-1.5">
                        <span>{child.label}</span>
                        {isSelected && (
                          <span className="text-xs text-[var(--color-brand-accent)] transition-all transform animate-pulse" aria-hidden>
                            ➔
                          </span>
                        )}
                      </span>
                      <span
                        className={clsx(
                          "text-xs font-semibold",
                          isSelected ? "text-white/80" : "text-neutral-400",
                        )}
                      >
                        ({child.count})
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* IN STORE & DELIVERY - Rounded card section with inner padding */}
        <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm hover:border-neutral-300 transition-all duration-300">
          <span className="block text-xs font-black uppercase tracking-wider text-neutral-900 mb-3">
            In Store & Delivery
          </span>
          <div className="flex flex-col gap-2.5">
            {[
              { id: "pickup", label: "Pickup in Store", desc: "Ready in 1 hour" },
              { id: "fast", label: "Same-Day Delivery", desc: "As fast as 2 hrs" },
              { id: "free-ship", label: "Free Shipping", desc: "On orders over $50" },
            ].map((opt) => (
              <label
                key={opt.id}
                className="group flex items-start gap-3 rounded-lg p-2 hover:bg-neutral-50 cursor-pointer transition-all duration-200"
              >
                <input
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-black accent-black focus:ring-black cursor-pointer"
                />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-neutral-900 group-hover:text-black">
                    {opt.label}
                  </span>
                  <span className="text-[10px] text-neutral-500">
                    {opt.desc}
                  </span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* PRICE RANGE - Dual-range selector slider with rounded inputs */}
        <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm hover:border-neutral-300 transition-all duration-300">
          <span className="block text-xs font-black uppercase tracking-wider text-neutral-900 mb-3">
            Price Range
          </span>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-neutral-500">
              <span>Min Price</span>
              <span>Max Price</span>
            </div>
            
            {/* Custom styled range line and slider */}
            <div className="relative pt-1 px-1">
              <input
                type="range"
                min={0}
                max={300}
                step={10}
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                aria-label="Maximum price slider"
                className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-black focus:outline-none"
              />
            </div>

            {/* Rounded Numerical input boxes */}
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <span className="absolute left-2.5 top-2.5 text-xs text-neutral-400 font-bold">$</span>
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  placeholder="Min"
                  min={0}
                  className="h-9 w-full rounded-lg border border-neutral-200 pl-6 pr-2 text-xs font-bold focus:border-black focus:ring-2 focus:ring-black/10 focus:outline-none transition-all"
                />
              </div>
              <span className="text-neutral-400 font-bold text-xs">—</span>
              <div className="relative flex-1">
                <span className="absolute left-2.5 top-2.5 text-xs text-neutral-400 font-bold">$</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  placeholder="Max"
                  min={0}
                  className="h-9 w-full rounded-lg border border-neutral-200 pl-6 pr-2 text-xs font-bold focus:border-black focus:ring-2 focus:ring-black/10 focus:outline-none transition-all"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Expandable Accordion Modules with 12px rounded edges, hover transitions &arrow icon */}
        <div className="space-y-2.5">
          {/* YOUR BEAUTY PREFERENCES */}
          <FilterBlock id="preferences" title="Beauty Preferences">
            <div className="flex flex-col gap-2.5">
              {["Clean at Sephora", "Organic & Eco", "100% Vegan", "Cruelty-Free Status"].map((pref) => (
                <label
                  key={pref}
                  className="group flex items-center gap-3 rounded-lg p-1.5 hover:bg-neutral-50 cursor-pointer transition-all"
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-neutral-300 text-black accent-black focus:ring-black cursor-pointer"
                  />
                  <span className="text-xs font-semibold text-neutral-700 group-hover:text-black">
                    {pref}
                  </span>
                </label>
              ))}
            </div>
          </FilterBlock>

          {/* BRAND */}
          <FilterBlock id="brand" title="Brand">
            <div className="space-y-3">
              <div className="relative">
                <input
                  type="search"
                  value={brandSearch}
                  onChange={(e) => setBrandSearch(e.target.value)}
                  placeholder="Search brands..."
                  className="h-9 w-full rounded-lg border border-neutral-200 px-3 text-xs focus:border-black focus:ring-2 focus:ring-black/10 focus:outline-none transition-all"
                />
              </div>
              <ul className="max-h-40 overflow-y-auto space-y-1.5 pr-1 thin-scrollbar">
                {brands.length === 0 ? (
                  <li className="text-xs text-neutral-400 italic py-2">No matching brands</li>
                ) : (
                  brands.map((brand) => (
                    <li key={brand}>
                      <label className="group flex items-center gap-3 rounded-lg p-1.5 hover:bg-neutral-50 cursor-pointer transition-all">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-neutral-300 text-black accent-black focus:ring-black cursor-pointer"
                        />
                        <span className="text-xs font-semibold text-neutral-700 group-hover:text-black">
                          {brand}
                        </span>
                      </label>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </FilterBlock>

          {/* RATING */}
          <FilterBlock id="rating" title="Rating">
            <div className="flex flex-col gap-2.5">
              {[5, 4, 3, 2, 1].map((star) => (
                <label
                  key={star}
                  className="group flex items-center gap-3 rounded-lg p-1.5 hover:bg-neutral-50 cursor-pointer transition-all"
                >
                  <input
                    type="radio"
                    name="rating"
                    className="h-4 w-4 text-black accent-black focus:ring-black cursor-pointer"
                  />
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        viewBox="0 0 24 24"
                        fill={i < star ? "currentColor" : "#e5e7eb"}
                        className="h-3.5 w-3.5"
                      >
                        <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.5L6 22l1.5-7.2L2 10l7.1-1.1z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-neutral-500 group-hover:text-black">
                    & up
                  </span>
                </label>
              ))}
            </div>
          </FilterBlock>

          {/* SKIN CONCERNS */}
          <FilterBlock id="skin" title="Skin Concerns">
            <div className="flex flex-col gap-2.5">
              {[
                "Acne & Blemishes",
                "Anti-Aging Core",
                "Dark Spots & Tone",
                "Deep Dryness",
                "Fine Lines & Wrinkles",
                "Oil Control",
                "Pore Minimizer",
                "Skin Sensitivity",
              ].map((concern) => (
                <label
                  key={concern}
                  className="group flex items-center gap-3 rounded-lg p-1.5 hover:bg-neutral-50 cursor-pointer transition-all"
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-neutral-300 text-black accent-black focus:ring-black cursor-pointer"
                  />
                  <span className="text-xs font-semibold text-neutral-700 group-hover:text-black">
                    {concern}
                  </span>
                </label>
              ))}
            </div>
          </FilterBlock>
        </div>

        {/* Modern Confirmation Button */}
        <div className="pt-4 border-t border-neutral-200/60 mt-3">
          <button
            type="button"
            onClick={() => alert("تم تطبيق الفلاتر بنجاح! ✨")}
            className="flex h-11 w-full items-center justify-center rounded-xl bg-black text-xs font-black uppercase tracking-widest text-white shadow-md hover:bg-neutral-800 transition-all active:scale-95"
          >
            تأكيد الفلاتر
          </button>
        </div>

      </div>
    </aside>
  );
}
