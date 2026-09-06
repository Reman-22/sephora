"use client";

import { useState } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import type { ProductDetails, ProductVariant } from "@/lib/product-data";
import { MAKEUP_SWATCHES } from "@/lib/product-data";
import { useStore } from "@/lib/store";

interface ProductInfoProps {
  product: ProductDetails;
}

const FULFILLMENT_OPTIONS = [
  {
    id: "free-shipping",
    title: "FREE Shipping",
    description: "On Orders Over $50",
    icon: "📦",
    badge: "Selected",
  },
  {
    id: "auto-replenish",
    title: "Auto-Replenish",
    description: "Save 5% on this item",
    icon: "🔄",
  },
  {
    id: "fast-delivery",
    title: "Fast Delivery",
    description: "Same-day in 2 hrs",
    icon: "🚚",
  },
  {
    id: "pickup",
    title: "Buy Online & Pick Up",
    description: "Get it tomorrow",
    icon: "🏬",
  },
];

export function ProductInfo({ product }: ProductInfoProps) {
  const { addToCart, setCartOpen } = useStore();
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants.find((v) => v.inStock) ?? product.variants[0],
  );
  const [selectedSwatch, setSelectedSwatch] = useState<string>(
    MAKEUP_SWATCHES[0].id
  );
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [fulfillment, setFulfillment] = useState("free-shipping");

  const handleAddToBasket = () => {
    addToCart(product.id, quantity);
    setCartOpen(true);
  };

  // Dynamic values depending on selected product
  const priceValue = product.id === "jo-malone-english-pear" ? selectedVariant.price : 25.00;
  const isPocketBronze = product.brand.toLowerCase().includes("rhode") || product.name.toLowerCase().includes("bronze");

  return (
    <div className="flex flex-col gap-6">
      {/* 1. Product Information Header */}
      <div className="space-y-2.5">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-neutral-900">
          {product.brand}
        </p>
        <h1 className="text-2xl font-black leading-tight tracking-tight text-neutral-900 md:text-3xl">
          {isPocketBronze ? "Pocket Bronze Long-Wearing Cream Bronzer" : product.name}
        </h1>
        
        {/* Ratings & Engagement Block */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1.5 border-b border-neutral-100 pb-3">
          <div
            role="img"
            aria-label={`Rated ${product.rating} out of 5 stars`}
            className="inline-flex items-center gap-0.5 text-amber-500"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} viewBox="0 0 24 24" fill={i < 4 ? "currentColor" : "#e5e7eb"} className="h-4 w-4">
                <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.5L6 22l1.5-7.2L2 10l7.1-1.1z" />
              </svg>
            ))}
          </div>
          <Link
            href="#reviews"
            className="text-xs font-bold text-neutral-700 underline underline-offset-2 hover:text-black transition-colors"
          >
            440 reviews
          </Link>
          <span className="h-3.5 w-px bg-neutral-300" />
          <Link
            href="#ask"
            className="text-xs font-bold text-neutral-700 underline underline-offset-2 hover:text-black transition-colors"
          >
            Ask a question
          </Link>
          <span className="h-3.5 w-px bg-neutral-300" />
          <span className="text-xs font-bold text-neutral-500">
            181.1K Loves
          </span>
        </div>

        {/* Feature Badges below ratings */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {["Blendability", "Creaminess", "Glow", "Long-Wearing"].map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-neutral-100 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-neutral-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* 2. Pricing & Payment Options */}
      <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/40 p-4 shadow-sm space-y-2.5">
        <div className="flex items-baseline gap-2.5">
          <span className="text-3xl font-black text-neutral-900">
            ${priceValue.toFixed(2)}
          </span>
          <span className="text-xs font-bold text-neutral-500">
            / standard size
          </span>
        </div>
        <p className="text-xs text-neutral-600 leading-relaxed">
          or 4 interest-free payments of{" "}
          <strong className="font-bold text-neutral-900">${(priceValue / 4).toFixed(2)}</strong> with{" "}
          <span className="font-black text-black">Klarna</span> or{" "}
          <span className="font-black text-black">Afterpay</span>.
        </p>
        
        {/* Subscription discount highlight */}
        <div className="flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-100 p-2.5 text-emerald-900">
          <span className="text-lg" aria-hidden>🔄</span>
          <span className="text-xs font-bold">
            Get It For <strong className="font-black">${(priceValue * 0.95).toFixed(2)} (5% Off)</strong> With Auto-Replenish
          </span>
        </div>
      </div>

      {/* 3. Category-Specific Options — Borderless & clean (No outer box/borders) */}
      {product.category === "makeup" && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                Shade Selector (Makeup Only)
              </span>
              <span className="text-xs font-bold text-neutral-900 leading-tight">
                Color: sip - light to light-medium with a golden undertone
              </span>
            </div>
            <span className="rounded-full bg-[var(--color-brand-accent)] px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-white">
              NEW
            </span>
          </div>

          {/* Horizontal grid of circular swatches with NEW label overlay */}
          <div className="flex gap-3 overflow-x-auto pb-1.5 no-scrollbar" role="radiogroup" aria-label="Available Shades">
            {MAKEUP_SWATCHES.map((swatch) => (
              <button
                key={swatch.id}
                type="button"
                role="radio"
                aria-checked={swatch.id === selectedSwatch}
                onClick={() => setSelectedSwatch(swatch.id)}
                className={clsx(
                  "relative flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-full border-2 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2",
                  swatch.id === selectedSwatch
                    ? "border-black scale-105"
                    : "border-neutral-200 hover:border-neutral-400"
                )}
              >
                {/* Perfectly circular thumbnail */}
                <span
                  className="h-10 w-10 rounded-full border border-neutral-300 shadow-inner"
                  style={{ backgroundColor: swatch.color }}
                />
                {/* NEW Tag layered on top */}
                <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 scale-75 rounded-full bg-black px-1.5 py-0.5 text-[8px] font-extrabold uppercase tracking-widest text-white">
                  NEW
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {product.category === "fragrance" && (
        <div className="space-y-3">
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
              Quantity / Scent Options (Fragrance Only)
            </span>
            <span className="text-xs font-bold text-neutral-900 leading-tight">
              Select bottle volume or quantity sets:
            </span>
          </div>
          <div className="flex gap-2">
            {[1, 2, 3].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => setQuantity(num)}
                className={clsx(
                  "flex-1 py-3 px-4 rounded-xl border-2 text-center text-xs font-extrabold uppercase tracking-wider transition-all",
                  quantity === num
                    ? "border-black bg-black text-white"
                    : "border-neutral-200 bg-white text-neutral-800 hover:border-neutral-400"
                )}
              >
                {num} {num === 1 ? "Bottle" : "Bottles"}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 4. Fulfillment & Delivery Options Grid */}
      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">
          Fulfillment & Delivery
        </span>
        <div
          role="radiogroup"
          aria-label="Choose fulfillment option"
          className="grid grid-cols-2 gap-2.5 md:grid-cols-4"
        >
          {FULFILLMENT_OPTIONS.map((option) => {
            const isSelected = fulfillment === option.id;
            return (
              <button
                key={option.id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => setFulfillment(option.id)}
                className={clsx(
                  "relative flex flex-col items-start gap-1 rounded-xl border-2 p-3 text-left transition-all shadow-sm",
                  isSelected
                    ? "border-black bg-white ring-2 ring-black/5"
                    : "border-neutral-200 bg-white hover:border-neutral-400"
                )}
              >
                <span className="text-xl" aria-hidden>{option.icon}</span>
                <span className="text-xs font-extrabold text-neutral-900">{option.title}</span>
                <span className="text-[10px] text-neutral-600 leading-tight mt-0.5">{option.description}</span>
                
                {option.badge && (
                  <span className="absolute top-2 right-2 rounded-full bg-neutral-900 px-1.5 py-0.5 text-[7px] font-extrabold uppercase tracking-widest text-white">
                    {option.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 5. Call to Action & Cart Controls */}
      <div className="space-y-3 pt-2">
        {/* Banner Message */}
        <div className="rounded-xl bg-neutral-100 p-3 text-center text-xs font-bold text-neutral-800">
          Sign in or create an account to enjoy FREE standard shipping
        </div>

        {/* Primary Action Group */}
        <div className="flex items-center gap-3">
          {/* Quantity Selector dropdown with rounded corners */}
          <div className="relative shrink-0">
            <select
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              aria-label="Select quantity"
              className="h-14 rounded-full border-2 border-neutral-300 bg-white pl-5 pr-9 text-sm font-extrabold focus:border-black focus:outline-none appearance-none cursor-pointer"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-neutral-500">
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>

          {/* Large prominent Add to Basket button in dark rose/coral pill style */}
          <button
            type="button"
            disabled={!selectedVariant.inStock}
            onClick={handleAddToBasket}
            className="flex h-14 flex-1 items-center justify-center rounded-full bg-[#D48C7E] text-sm font-black uppercase tracking-[0.12em] text-white shadow-md transition-all hover:bg-[#c37a6d] active:scale-95 disabled:cursor-not-allowed disabled:bg-neutral-300"
          >
            Add to Basket
          </button>

          {/* Heart icon button with rounded border */}
          <button
            type="button"
            onClick={() => setWishlisted(!wishlisted)}
            aria-pressed={wishlisted}
            aria-label={wishlisted ? "Remove from favorites" : "Add to favorites"}
            className={clsx(
              "flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-black",
              wishlisted
                ? "border-[var(--color-brand-accent)] bg-[var(--color-brand-accent)] text-white"
                : "border-neutral-300 bg-white text-neutral-900 hover:border-black"
            )}
          >
            <svg viewBox="0 0 24 24" fill={wishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path d="M12 21s-7-4.35-9.5-9.5A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 5.5C19 16.65 12 21 12 21z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* 6. Product Highlights / Badges (Bottom Section) */}
      <div className="border-t border-neutral-200/80 pt-5 mt-2">
        <span className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4 text-center">
          Product Claims & Highlights
        </span>
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "Non-Comedogenic", icon: "🧴" },
            { label: "Cream Formula", icon: "✨" },
            { label: "Gluten Free", icon: "🌿" },
          ].map((claim) => (
            <div
              key={claim.label}
              className="flex flex-col items-center text-center p-2 rounded-xl border border-neutral-100 bg-neutral-50/50"
            >
              <span className="text-2xl mb-1.5" aria-hidden>{claim.icon}</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-800 leading-tight">
                {claim.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Sticky mobile CTA bar
export function StickyMobileCTA({ product }: ProductInfoProps) {
  const { addToCart, setCartOpen } = useStore();
  const priceValue = product.id === "jo-malone-english-pear" ? product.variants[0].price : 25.00;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-neutral-200 bg-white p-3 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] md:hidden">
      <div className="flex items-center gap-2">
        <div className="flex-1">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
            {product.brand}
          </p>
          <p className="text-base font-bold text-neutral-900">
            ${priceValue.toFixed(2)}
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            addToCart(product.id, 1);
            setCartOpen(true);
          }}
          className="flex h-12 flex-1 items-center justify-center rounded-full bg-[#D48C7E] text-xs font-bold uppercase tracking-wider text-white"
        >
          Add to Basket
        </button>
      </div>
    </div>
  );
}
