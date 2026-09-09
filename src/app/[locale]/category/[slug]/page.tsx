import { NEW_ARRIVALS, SELLING_FAST, CHOSEN_FOR_YOU, APP_EARLY_ACCESS } from "@/lib/data";
import CategoryPageContent from "./CategoryPageContent";
import type { Product } from "@/lib/types";
import { getMessages } from "next-intl/server";
import { locales } from "@/i18n";

const ALL_PRODUCTS: Product[] = [...CHOSEN_FOR_YOU, ...APP_EARLY_ACCESS, ...NEW_ARRIVALS, ...SELLING_FAST];

const CATEGORY_DATA: Record<string, { name: string; description: string; products: Product[] }> = {
  new: { name: "New Arrivals", description: "Discover the latest beauty products from top brands", products: NEW_ARRIVALS },
  deals: { name: "50% Off Deals", description: "Save big on select beauty favorites", products: ALL_PRODUCTS.slice(0, 8) },
  makeup: { name: "Makeup", description: "Shop all makeup products — face, eye, lip, and more", products: [...CHOSEN_FOR_YOU, ...NEW_ARRIVALS.slice(0, 3)] },
  skincare: { name: "Skincare", description: "Complete your skincare routine with cleansers, serums, moisturizers, and more", products: [...SELLING_FAST, ...NEW_ARRIVALS.slice(0, 2)] },
  fragrance: { name: "Fragrance", description: "Explore perfumes, colognes, and home fragrances", products: ALL_PRODUCTS.filter((p) => p.category === "fragrance") },
  hair: { name: "Hair", description: "Shampoo, conditioner, styling, and treatments for all hair types", products: ALL_PRODUCTS.filter((p) => p.category === "hair") },
  "bath-body": { name: "Bath & Body", description: "Pamper yourself with luxurious bath and body products", products: ALL_PRODUCTS.slice(4, 10) },
  mini: { name: "Mini Size", description: "Try before you buy with travel and mini sizes", products: ALL_PRODUCTS.slice(0, 6) },
  brands: { name: "Brands", description: "Shop all your favorite beauty brands in one place", products: ALL_PRODUCTS },
  gifts: { name: "Gifts & Value Sets", description: "The perfect gifts for every beauty lover", products: ALL_PRODUCTS.slice(2, 8) },
  "gift-cards": { name: "Gift Cards", description: "Share the gift of choice with Sephora gift cards", products: [] },
  sale: { name: "Sale & Offers", description: "Shop our latest sales and special offers", products: ALL_PRODUCTS.slice(0, 10) },
};

interface CategoryPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { locale, slug } = await params;
  let category = CATEGORY_DATA[slug] || CATEGORY_DATA.new;

  if (slug === "deals") {
    category = {
      ...category,
      products: category.products.map((p) => ({
        ...p,
        originalPrice: p.priceMin * 2,
        badge: "limited" as const,
        badgeText: "50% OFF",
      })),
    };
  }

  return <CategoryPageContent locale={locale} category={category} />;
}

export async function generateStaticParams() {
  const slugs = Object.keys(CATEGORY_DATA);
  const params: { locale: string; slug: string }[] = [];
  const locales = ["en", "ar"];
  for (const locale of locales) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }
  return params;
}