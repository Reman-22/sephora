// =========================================================================
// Type definitions — Beauty Storefront domain model
// =========================================================================

export interface Product {
  id: string;
  brand: string;
  name: string;
  description: string;
  priceMin: number;
  priceMax?: number;
  originalPrice?: number;
  colors?: string[];
  image: string;
  rating: number;
  reviewCount: number;
  badge?: BadgeType;
  badgeText?: string;
  isNew?: boolean;
  isAppExclusive?: boolean;
  isLimited?: boolean;
  isClean?: boolean;
  category: ProductCategory;
}

export type ProductCategory =
  | "makeup"
  | "skincare"
  | "fragrance"
  | "hair"
  | "bath-body"
  | "mini";

export type BadgeType =
  | "new"
  | "app-exclusive"
  | "limited"
  | "clean"
  | "bestseller"
  | "award";

export interface PromoBanner {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  cta: string;
  tone: "purple" | "blue" | "green" | "pink" | "neutral";
  image?: string;
}

export interface BeautyOffer {
  id: string;
  tag: string;
  tagColor: "red" | "orange" | "purple" | "pink" | "black";
  title: string;
  description: string;
  image: string;
  bgGradient: string;
}

export interface RewardItem {
  id: string;
  title: string;
  brand: string;
  points: number;
  image: string;
  type: "sample" | "full" | "experience";
}

export interface QuickLink {
  id: string;
  label: string;
  icon: string;
  image?: string;
  href: string;
}

export interface PaymentFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  cta?: string;
}

export type Category =
  | "New"
  | "Olive Young K-Beauty Edit"
  | "Makeup"
  | "Skincare"
  | "Fragrance"
  | "Hair"
  | "Bath & Body"
  | "Mini Size"
  | "Brands"
  | "Gifts & Value Sets"
  | "Sales";
