"use client";

import { ProductCard } from "@/components/ui/ProductCard";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { FilterSidebar } from "@/components/filters/FilterSidebar";
import Link from "next/link";
import { NEW_ARRIVALS, SELLING_FAST, CHOSEN_FOR_YOU, APP_EARLY_ACCESS } from "@/lib/data";
import { useState, useMemo } from "react";
import type { Product } from "@/lib/types";
import { useTranslations } from "next-intl";

const ALL_PRODUCTS: Product[] = [...CHOSEN_FOR_YOU, ...APP_EARLY_ACCESS, ...NEW_ARRIVALS, ...SELLING_FAST];

interface SubCategoryPageContentProps {
  locale: string;
  slug: string;
  subcategory: string;
  categoryName: string;
  subcategoryName: string;
}

export default function SubCategoryPageContent({ 
  locale, slug, subcategory, categoryName, subcategoryName 
}: SubCategoryPageContentProps) {
  const t = useTranslations("common");
  const [sortBy, setSortBy] = useState("Bestselling");

  let products: Product[] = ALL_PRODUCTS.slice(0, 12);
  if (slug === "makeup") {
    products = products.map((p, idx) => ({
      ...p,
      colors: p.colors || [
        ["#FADBD8", "#F5B7B1", "#E6B0AA"],
        ["#FCF3CF", "#EBDEF0", "#E1AB8C"],
        ["#F5CBA7", "#DC7633", "#873600"],
      ][idx % 3],
    }));
  }

  const sortedProducts = useMemo(() => {
    switch (sortBy) {
      case "Newest": return [...products].reverse();
      case "Price: Low to High": return [...products].sort((a, b) => a.priceMin - b.priceMin);
      case "Price: High to Low": return [...products].sort((a, b) => b.priceMin - a.priceMin);
      case "Top Rated": return [...products].sort((a, b) => b.rating - a.rating);
      default: return products;
    }
  }, [products, sortBy]);

  const sortOptions = [
    { value: "Bestselling", label: t("bestselling") },
    { value: "Newest", label: t("newest") },
    { value: "Price: Low to High", label: t("priceLowHigh") },
    { value: "Price: High to Low", label: t("priceHighLow") },
    { value: "Top Rated", label: t("topRated") },
  ];

  return (
    <>
      <a href="#main-content" className="skip-link">{t("skipToContent")}</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <div className="mx-auto max-w-[var(--container-max)] px-4 py-4 md:px-6">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-neutral-500">
            <Link href={`/${locale}`} className="hover:text-black hover:underline">{t("home")}</Link>
            <span aria-hidden>/</span>
            <Link href={`/${locale}/category/${slug}`} className="hover:text-black hover:underline">{categoryName}</Link>
            <span aria-hidden>/</span>
            <span className="font-medium text-neutral-900">{subcategoryName}</span>
          </nav>
        </div>
        <div className="mx-auto max-w-[var(--container-max)] px-4 pb-6 md:px-6">
          <h1 className="text-2xl font-bold uppercase tracking-tight text-neutral-900 md:text-3xl">{subcategoryName}</h1>
          <p className="mt-2 text-sm text-neutral-600 md:text-base">Discover the best {subcategoryName.toLowerCase()} products from top beauty brands.</p>
        </div>
        <div className="mx-auto max-w-[var(--container-max)] border-t border-neutral-200 px-4 py-4 md:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-neutral-500"><strong className="text-neutral-900">{sortedProducts.length}</strong> results in {subcategoryName}</span>
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-xs font-semibold uppercase tracking-wider text-neutral-700">{t("sortBy")}:</label>
              <select id="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="h-9 rounded-md border border-neutral-300 bg-white px-3 text-xs focus:border-black focus:outline-none">
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[var(--container-max)] px-4 pb-12 md:px-6">
          <div className="flex gap-6">
            <FilterSidebar activeCategory={slug} activeSubcategory={subcategory} />
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}