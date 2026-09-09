"use client";

import { ProductCard } from "@/components/ui/ProductCard";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { FilterSidebar } from "@/components/filters/FilterSidebar";
import Link from "next/link";
import { useState, useMemo } from "react";
import type { Product } from "@/lib/types";
import { useTranslations } from "next-intl";

interface CategoryPageContentProps {
  locale: string;
  category: {
    name: string;
    description: string;
    products: Product[];
  };
}

export default function CategoryPageContent({ locale, category }: CategoryPageContentProps) {
  const t = useTranslations("common");
  const [sortBy, setSortBy] = useState("Bestselling");

  const sortedProducts = useMemo(() => {
    switch (sortBy) {
      case "Newest": return [...category.products].reverse();
      case "Price: Low to High": return [...category.products].sort((a, b) => a.priceMin - b.priceMin);
      case "Price: High to Low": return [...category.products].sort((a, b) => b.priceMin - a.priceMin);
      case "Top Rated": return [...category.products].sort((a, b) => b.rating - a.rating);
      default: return category.products;
    }
  }, [category.products, sortBy]);

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
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-500">
            <Link href={`/${locale}`} className="hover:text-black hover:underline">{t("home")}</Link>
            <span aria-hidden>/</span>
            <span className="font-medium text-neutral-900">{category.name}</span>
          </nav>
        </div>
        <div className="mx-auto max-w-[var(--container-max)] px-4 pb-6 md:px-6">
          <h1 className="text-2xl font-bold uppercase tracking-tight text-neutral-900 md:text-3xl">{category.name}</h1>
          <p className="mt-2 text-sm text-neutral-600 md:text-base">{category.description}</p>
        </div>
        <div className="mx-auto max-w-[var(--container-max)] border-t border-neutral-200 px-4 py-4 md:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-neutral-500"><strong className="text-neutral-900">{sortedProducts.length}</strong> products</span>
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
            <FilterSidebar activeCategory={category.name.toLowerCase()} />
            <div className="flex-1">
              {sortedProducts.length === 0 ? (
                <div className="py-16 text-center"><p className="text-lg text-neutral-500">{t("noResults")}</p></div>
              ) : (
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {sortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}