// =========================================================================
// Mock Product Data for PDP (Product Detail Page)
// =========================================================================

export interface ProductVariant {
  id: string;
  name: string;
  size: string;
  sizeOz: string;
  price: number;
  inStock: boolean;
  image: string;
  color?: string;
  finish?: string;
}

export interface ProductMedia {
  id: string;
  type: "image" | "video";
  url: string;
  alt: string;
}

export interface ProductDetails {
  id: string;
  brand: string;
  name: string;
  family: string;
  description: string;
  shortDescription: string;
  rating: number;
  reviewCount: number;
  category: "fragrance" | "makeup" | "skincare" | "hair";
  highlights: {
    icon: string;
    label: string;
  }[];
  media: ProductMedia[];
  variants: ProductVariant[];
  about: string;
  ingredients: string[];
  howToUse: string;
  similarProducts: string[];
  youMayAlsoLike: string[];
}

export const PRODUCT_MOCK: ProductDetails = {
  id: "jo-malone-english-pear",
  brand: "Jo Malone London",
  name: "English Pear & Freesia Cologne",
  family: "Cologne Collection",
  description:
    "The freshness of just-ripe pears, wrapped in white freesia, mellowed by amber, musk and woods. A perfectly composed fragrance that's eternally feminine and utterly timeless.",
  shortDescription: "A fruity-floral fragrance with pear, freesia, and amber.",
  rating: 4.8,
  reviewCount: 4520,
  category: "fragrance",
  highlights: [
    { icon: "🌸", label: "Floral Scent" },
    { icon: "🍐", label: "Fruity Notes" },
    { icon: "👫", label: "Unisex" },
    { icon: "✨", label: "Layerable" },
  ],
  media: [
    {
      id: "m1",
      type: "image",
      url: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop",
      alt: "Jo Malone English Pear & Freesia bottle front view",
    },
    {
      id: "m2",
      type: "image",
      url: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&h=800&fit=crop",
      alt: "Jo Malone English Pear & Freesia bottle side view",
    },
    {
      id: "m3",
      type: "image",
      url: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=800&h=800&fit=crop",
      alt: "Jo Malone English Pear & Freesia lifestyle shot",
    },
    {
      id: "m4",
      type: "image",
      url: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=800&h=800&fit=crop",
      alt: "Jo Malone English Pear & Freesia packaging",
    },
    {
      id: "m5",
      type: "image",
      url: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800&h=800&fit=crop",
      alt: "Jo Malone English Pear & Freesia detail shot",
    },
    {
      id: "m6",
      type: "video",
      url: "https://images.unsplash.com/photo-1547887537-6158d2403efb?w=800&h=800&fit=crop",
      alt: "Jo Malone English Pear & Freesia video",
    },
  ],
  variants: [
    {
      id: "v1",
      name: "1.0 OZ / 30mL",
      size: "30mL",
      sizeOz: "1.0 OZ",
      price: 78,
      inStock: true,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop",
    },
    {
      id: "v2",
      name: "3.4 OZ / 100mL",
      size: "100mL",
      sizeOz: "3.4 OZ",
      price: 185,
      inStock: true,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop",
    },
    {
      id: "v3",
      name: "Mini 0.33 OZ / 9mL",
      size: "9mL",
      sizeOz: "0.33 OZ",
      price: 32,
      inStock: false,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&h=800&fit=crop",
    },
  ],
  about:
    "The freshness of just-ripe pears, wrapped in white freesia, mellowed by amber, musk and woods. Key Notes: Pear, Freesia, Amber, Patchouli. This perfectly composed fragrance is eternally feminine and utterly timeless. Fragrance Family: Fruity. Scent Type: Fresh & Sweet.",
  ingredients: [
    "Alcohol Denat.",
    "Water (Aqua)(Eau)",
    "Fragrance (Parfum)",
    "Alpha-Isomethyl Ionone",
    "Benzyl Salicylate",
    "Butylphenyl Methylpropional",
    "Citronellol",
    "Geraniol",
    "Hydroxycitronellal",
    "Limonene",
    "Linalool",
  ],
  howToUse:
    "Apply to pulse points: wrists, neck, and behind ears. For a longer-lasting scent, layer with matching bath and body products. Fragrance Combining: Pair with Wild Bluebell Cologne for a unique, personalized scent.",
  similarProducts: ["p1", "p2", "p3", "p4", "p5"],
  youMayAlsoLike: ["n1", "n2", "n3", "n4", "n5"],
};

// Color swatches for makeup products
export const MAKEUP_SWATCHES = [
  { id: "s1", color: "#E8B4B8", name: "Petal", finish: "Sheer" },
  { id: "s2", color: "#D4A5A5", name: "Rose", finish: "Shimmer" },
  { id: "s3", color: "#C97B7B", name: "Berry", finish: "High Shine" },
  { id: "s4", color: "#A05252", name: "Wine", finish: "Matte" },
  { id: "s5", color: "#8B4545", name: "Plum", finish: "Satin" },
];

import { CHOSEN_FOR_YOU, APP_EARLY_ACCESS, NEW_ARRIVALS, SELLING_FAST } from "./data";

export function findProductDetails(slug: string): ProductDetails {
  const all = [...CHOSEN_FOR_YOU, ...APP_EARLY_ACCESS, ...NEW_ARRIVALS, ...SELLING_FAST];
  const found = all.find((p) => p.id === slug || p.id === "p" + slug || p.id === "a" + slug);
  
  if (!found) {
    return PRODUCT_MOCK;
  }

  // Construct a beautiful detailed product view dynamically
  const isMakeup = found.category === "makeup";
  
  return {
    id: found.id,
    brand: found.brand,
    name: found.name,
    family: isMakeup ? "Beauty Color Collection" : "Premium Skincare & Scent",
    description: found.description,
    shortDescription: found.description,
    rating: found.rating,
    reviewCount: found.reviewCount,
    category: found.category === "bath-body" || found.category === "mini" ? "skincare" : found.category as any,
    highlights: isMakeup ? [
      { icon: "💄", label: "Intense Pigment" },
      { icon: "✨", label: "Velvety Finish" },
      { icon: "🐰", label: "Cruelty-Free" },
      { icon: "🌿", label: "Clean ingredients" }
    ] : [
      { icon: "🌸", label: "Luxury Notes" },
      { icon: "🍐", label: "Natural Scent" },
      { icon: "👫", label: "Unisex" },
      { icon: "✨", label: "Layerable" }
    ],
    media: [
      { id: "m1", type: "image", url: found.image, alt: found.name },
      { id: "m2", type: "image", url: found.image, alt: found.name + " alternate" }
    ],
    variants: [
      {
        id: "v1",
        name: "Standard Size",
        size: isMakeup ? "Full size" : "50mL",
        sizeOz: isMakeup ? "Standard" : "1.7 OZ",
        price: found.priceMin,
        inStock: true,
        image: found.image
      },
      {
        id: "v2",
        name: "Mini Size",
        size: isMakeup ? "Mini size" : "15mL",
        sizeOz: isMakeup ? "Travel" : "0.5 OZ",
        price: Math.round(found.priceMin * 0.45),
        inStock: true,
        image: found.image
      }
    ],
    about: found.description + " Developed by leading beauty experts to deliver uncompromising quality, gorgeous pigments, and a luxury feel.",
    ingredients: isMakeup ? ["Mica", "Silica", "Titanium Dioxide", "Iron Oxides"] : ["Water", "Glycerin", "Niacinamide", "Butylene Glycol"],
    howToUse: isMakeup ? "Apply directly with brush or fingertips. Blend outwards until desired coverage is achieved." : "Apply to clean skin morning and evening. Massage gently in upward circular motions.",
    similarProducts: ["p1", "p2", "p3"],
    youMayAlsoLike: ["n1", "n2", "n3"]
  };
}
