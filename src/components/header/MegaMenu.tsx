import Link from "next/link";

export interface MegaMenuColumn {
  heading: string;
  links: { label: string; href: string; tag?: string }[];
}

export interface MegaMenuData {
  columns: MegaMenuColumn[];
  featured?: {
    title: string;
    subtitle: string;
    cta: string;
    href: string;
    image: string;
    tone: "pink" | "purple" | "green" | "blue";
  };
}

const toneClasses = {
  pink: "from-rose-200 via-pink-100 to-white text-neutral-900",
  purple: "from-purple-700 via-purple-600 to-purple-900 text-white",
  green: "from-emerald-200 via-green-100 to-white text-neutral-900",
  blue: "from-sky-100 via-blue-50 to-white text-neutral-900",
};

export function MegaMenu({ data }: { data: MegaMenuData }) {
  return (
    <div className="border-t border-neutral-100 bg-white shadow-lg">
      <div className="mx-auto grid max-w-[var(--container-max)] gap-6 px-6 py-8 md:grid-cols-[repeat(4,1fr)_1.2fr] md:gap-8">
        {/* Columns */}
        {data.columns.map((col) => (
          <div key={col.heading}>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-neutral-900">
              {col.heading}
            </h3>
            <ul className="flex flex-col gap-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-neutral-700 transition-colors hover:text-black"
                  >
                    {link.label}
                    {link.tag && (
                      <span className="rounded-full bg-[var(--color-brand-accent)] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                        {link.tag}
                      </span>
                    )}
                    <span
                      aria-hidden
                      className="h-px w-0 bg-black transition-all duration-[var(--duration-fast)] group-hover:w-2"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Featured promo */}
        {data.featured && (
          <Link
            href={data.featured.href}
            className={`group relative flex flex-col justify-between overflow-hidden rounded-xl bg-gradient-to-br p-5 md:p-6 ${toneClasses[data.featured.tone]}`}
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">
                Featured
              </p>
              <h4 className="mt-2 text-lg font-extrabold leading-tight">
                {data.featured.title}
              </h4>
              <p className="mt-1 text-sm opacity-80">{data.featured.subtitle}</p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider">
              {data.featured.cta}
              <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3">
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span
              aria-hidden
              className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-110"
            />
          </Link>
        )}
      </div>
    </div>
  );
}

// ========================================================================
// Mega Menu content for each category
// ========================================================================

export const MEGA_MENUS: Record<string, MegaMenuData> = {
  New: {
    columns: [
      {
        heading: "New In",
        links: [
          { label: "All New Arrivals", href: "/category/new" },
          { label: "New Makeup", href: "/category/new/makeup" },
          { label: "New Skincare", href: "/category/new/skincare" },
          { label: "New Fragrance", href: "/category/new/fragrance" },
        ],
      },
      {
        heading: "Trending Now",
        links: [
          { label: "Viral on TikTok", href: "#", tag: "HOT" },
          { label: "Celebrity Favorites", href: "#" },
          { label: "Clean at Sephora", href: "#" },
          { label: "Sustainability Picks", href: "#" },
        ],
      },
      {
        heading: "Shop By Concern",
        links: [
          { label: "Anti-Aging", href: "#" },
          { label: "Hydration", href: "#" },
          { label: "Brightening", href: "#" },
          { label: "Acne & Blemishes", href: "#" },
        ],
      },
      {
        heading: "Brands",
        links: [
          { label: "rhode", href: "#" },
          { label: "Rare Beauty", href: "#" },
          { label: "FENTY BEAUTY", href: "#" },
          { label: "Drunk Elephant", href: "#" },
        ],
      },
    ],
    featured: {
      title: "rhode Peptide Lip Treatment",
      subtitle: "The new viral must-have — Peptide, Glazing, and Espresso flavors.",
      cta: "Shop rhode",
      href: "#",
      image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop",
      tone: "pink",
    },
  },
  Makeup: {
    columns: [
      {
        heading: "Face",
        links: [
          { label: "Foundation", href: "/category/makeup/foundation" },
          { label: "Concealer", href: "/category/makeup/concealer" },
          { label: "Primer", href: "/category/makeup/primer" },
          { label: "Contour", href: "/category/makeup/contour" },
          { label: "Blush", href: "/category/makeup/blush" },
          { label: "Bronzer", href: "/category/makeup/bronzer" },
          { label: "Highlighter", href: "/category/makeup/highlighter" },
          { label: "Setting Powder & Spray", href: "/category/makeup/setting" },
        ],
      },
      {
        heading: "Eye",
        links: [
          { label: "Eyeshadow", href: "/category/makeup/eyeshadow" },
          { label: "Eyeliner", href: "/category/makeup/eyeliner" },
          { label: "Mascara", href: "/category/makeup/mascara" },
          { label: "Brow", href: "/category/makeup/brow" },
          { label: "False Lashes", href: "/category/makeup/lashes" },
          { label: "Eye Primer", href: "/category/makeup/eye-primer" },
        ],
      },
      {
        heading: "Lip",
        links: [
          { label: "Lipstick", href: "/category/makeup/lipstick" },
          { label: "Lip Gloss", href: "/category/makeup/lip-gloss" },
          { label: "Lip Liner", href: "/category/makeup/lip-liner" },
          { label: "Lip Stain", href: "/category/makeup/lip-stain" },
          { label: "Lip Treatment", href: "/category/makeup/lip-treatment" },
        ],
      },
      {
        heading: "Brushes & Tools",
        links: [
          { label: "Face Brushes", href: "/category/makeup/face-brushes" },
          { label: "Eye Brushes", href: "/category/makeup/eye-brushes" },
          { label: "Brush Sets", href: "/category/makeup/brush-sets" },
          { label: "Sponges", href: "/category/makeup/sponges" },
          { label: "Makeup Bags", href: "/category/makeup/bags" },
        ],
      },
    ],
    featured: {
      title: "FENTY Beauty Pro Filt'r",
      subtitle: "100+ shades. Inclusive foundation for every skin tone.",
      cta: "Find your shade",
      href: "#",
      image: "https://images.unsplash.com/photo-1522335789203-aaa2f6e27e27?w=400&h=400&fit=crop",
      tone: "purple",
    },
  },
  Skincare: {
    columns: [
      {
        heading: "Moisturizers",
        links: [
          { label: "Face Creams", href: "/category/skincare/face-creams" },
          { label: "Night Creams", href: "/category/skincare/night-creams" },
          { label: "Face Oils", href: "/category/skincare/face-oils" },
          { label: "BB & CC Creams", href: "/category/skincare/bb-cc" },
        ],
      },
      {
        heading: "Cleansers",
        links: [
          { label: "Face Wash", href: "/category/skincare/face-wash" },
          { label: "Exfoliators", href: "/category/skincare/exfoliators" },
          { label: "Makeup Removers", href: "/category/skincare/makeup-removers" },
          { label: "Face Wipes", href: "/category/skincare/face-wipes" },
        ],
      },
      {
        heading: "Treatments",
        links: [
          { label: "Serums", href: "/category/skincare/serums" },
          { label: "Masks", href: "/category/skincare/masks" },
          { label: "Eye Treatments", href: "/category/skincare/eye-treatments" },
          { label: "Acne & Blemishes", href: "/category/skincare/acne" },
        ],
      },
      {
        heading: "Sun Care",
        links: [
          { label: "Face SPF", href: "/category/skincare/face-spf" },
          { label: "Body SPF", href: "/category/skincare/body-spf" },
          { label: "Self Tanners", href: "/category/skincare/self-tanners" },
          { label: "After Sun", href: "/category/skincare/after-sun" },
        ],
      },
    ],
    featured: {
      title: "Drunk Elephant Protectors",
      subtitle: "Mineral sunscreen that protects from UVA, UVB, infrared & blue light.",
      cta: "Shop SPF",
      href: "#",
      image: "https://images.unsplash.com/photo-1620916566398-39f114357be8?w=400&h=400&fit=crop",
      tone: "green",
    },
  },
  Fragrance: {
    columns: [
      {
        heading: "For Her",
        links: [
          { label: "Women's Perfume", href: "/category/fragrance/women" },
          { label: "Rollerballs", href: "/category/fragrance/rollerballs" },
          { label: "Travel Size", href: "/category/fragrance/travel" },
          { label: "Gift Sets", href: "/category/fragrance/gifts-her" },
        ],
      },
      {
        heading: "For Him",
        links: [
          { label: "Men's Cologne", href: "/category/fragrance/men" },
          { label: "Rollerballs", href: "/category/fragrance/rollerballs-him" },
          { label: "Gift Sets", href: "/category/fragrance/gifts-him" },
        ],
      },
      {
        heading: "Home Fragrance",
        links: [
          { label: "Candles", href: "/category/fragrance/candles" },
          { label: "Diffusers", href: "/category/fragrance/diffusers" },
          { label: "Room Sprays", href: "/category/fragrance/room-sprays" },
        ],
      },
      {
        heading: "Shop By Note",
        links: [
          { label: "Floral", href: "#" },
          { label: "Fruity", href: "#" },
          { label: "Woody", href: "#" },
          { label: "Fresh", href: "#" },
          { label: "Oriental", href: "#" },
        ],
      },
    ],
    featured: {
      title: "Le Labo Santal 33",
      subtitle: "A cult-favorite woody aromatic fragrance for women & men.",
      cta: "Shop Le Labo",
      href: "#",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
      tone: "blue",
    },
  },
  Hair: {
    columns: [
      {
        heading: "Shampoo & Conditioner",
        links: [
          { label: "Shampoo", href: "/category/hair/shampoo" },
          { label: "Conditioner", href: "/category/hair/conditioner" },
          { label: "Dry Shampoo", href: "/category/hair/dry-shampoo" },
        ],
      },
      {
        heading: "Styling",
        links: [
          { label: "Heat Protectant", href: "/category/hair/heat-protectant" },
          { label: "Hair Spray", href: "/category/hair/hair-spray" },
          { label: "Hair Oil", href: "/category/hair/hair-oil" },
          { label: "Hair Masks", href: "/category/hair/hair-masks" },
        ],
      },
      {
        heading: "Treatments",
        links: [
          { label: "Scalp Treatments", href: "/category/hair/scalp" },
          { label: "Hair Growth", href: "/category/hair/growth" },
          { label: "Color Care", href: "/category/hair/color" },
        ],
      },
      {
        heading: "Tools & Accessories",
        links: [
          { label: "Hair Dryers", href: "/category/hair/dryers" },
          { label: "Flat Irons", href: "/category/hair/irons" },
          { label: "Brushes & Combs", href: "/category/hair/brushes" },
        ],
      },
    ],
    featured: {
      title: "Olaplex Bond Repair",
      subtitle: "Clinically proven to repair broken bonds in the hair.",
      cta: "Shop Olaplex",
      href: "#",
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=400&fit=crop",
      tone: "pink",
    },
  },
};

export function getCategoryMenu(label: string): MegaMenuData | undefined {
  // Map top-level categories to their mega menu
  const map: Record<string, string> = {
    New: "New",
    Makeup: "Makeup",
    Skincare: "Skincare",
    Fragrance: "Fragrance",
    Hair: "Hair",
  };
  const key = map[label];
  return key ? MEGA_MENUS[key] : undefined;
}
