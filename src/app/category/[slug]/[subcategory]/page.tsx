import { ProductCard } from "@/components/ui/ProductCard";
import { NEW_ARRIVALS, SELLING_FAST, CHOSEN_FOR_YOU, APP_EARLY_ACCESS } from "@/lib/data";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { FilterSidebar } from "@/components/filters/FilterSidebar";

const ALL_PRODUCTS = [...CHOSEN_FOR_YOU, ...APP_EARLY_ACCESS, ...NEW_ARRIVALS, ...SELLING_FAST];

// Category → subcategory mapping
const CATEGORY_MAP: Record<string, { name: string }> = {
  makeup: { name: "Makeup" },
  skincare: { name: "Skincare" },
  fragrance: { name: "Fragrance" },
  hair: { name: "Hair" },
};

// Subcategory labels
const SUBCATEGORY_LABELS: Record<string, string> = {
  foundation: "Foundation",
  contour: "Contour",
  concealer: "Concealer",
  setting: "Setting Spray & Powder",
  highlighter: "Highlighter",
  primer: "Face Primer",
  tinted: "Tinted Moisturizer",
  "face-sets": "Face Sets",
  "bb-cc": "BB & CC Cream",
  "color-correct": "Color Correct",
  moisturizers: "Moisturizers",
  cleansers: "Cleansers",
  serums: "Serums",
  masks: "Masks",
  "eye-treatments": "Eye Treatments",
  "sun-care": "Sun Care",
  exfoliators: "Exfoliators",
  women: "Women's Perfume",
  men: "Men's Cologne",
  rollerballs: "Rollerballs",
  candles: "Candles",
  "gift-sets": "Gift Sets",
  shampoo: "Shampoo",
  conditioner: "Conditioner",
  styling: "Styling",
  treatments: "Treatments",
  tools: "Tools",
};

interface SubCategoryPageProps {
  params: Promise<{ slug: string; subcategory: string }>;
}

export default async function SubCategoryPage({ params }: SubCategoryPageProps) {
  const { slug, subcategory } = await params;
  const categoryName = CATEGORY_MAP[slug]?.name ?? slug;
  const subcategoryName = SUBCATEGORY_LABELS[subcategory] ?? subcategory;

  // Mock products for this subcategory with dynamic makeup colors
  let products = ALL_PRODUCTS.slice(0, 12);
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
  const totalCount = 80 + Math.floor(subcategory.charCodeAt(0) % 120);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        {/* Breadcrumb */}
        <div className="mx-auto max-w-[var(--container-max)] px-4 py-4 md:px-6">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-neutral-500">
            <a href="/" className="hover:text-black hover:underline">
              Home
            </a>
            <span aria-hidden>/</span>
            <a href={`/category/${slug}`} className="hover:text-black hover:underline">
              {categoryName}
            </a>
            <span aria-hidden>/</span>
            <span className="font-medium text-neutral-900">{subcategoryName}</span>
          </nav>
        </div>

        {/* Category Header */}
        <div className="mx-auto max-w-[var(--container-max)] px-4 pb-6 md:px-6">
          <h1 className="text-2xl font-bold uppercase tracking-tight text-neutral-900 md:text-3xl">
            {subcategoryName}
          </h1>
          <p className="mt-2 text-sm text-neutral-600 md:text-base">
            Discover the best {subcategoryName.toLowerCase()} products from top beauty brands.
          </p>
        </div>

        {/* Sort bar */}
        <div className="mx-auto max-w-[var(--container-max)] border-t border-neutral-200 px-4 py-4 md:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-neutral-500">
              <strong className="text-neutral-900">{totalCount}</strong> results in {subcategoryName}
            </span>
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-xs font-semibold uppercase tracking-wider text-neutral-700">
                Sort by:
              </label>
              <select
                id="sort"
                className="h-9 rounded-md border border-neutral-300 bg-white px-3 text-xs focus:border-black focus:outline-none"
              >
                <option>Bestselling</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Top Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Filter Sidebar + Product Grid */}
        <div className="mx-auto max-w-[var(--container-max)] px-4 pb-12 md:px-6">
          <div className="flex gap-6">
            {/* Filter Sidebar */}
            <FilterSidebar activeCategory={slug} activeSubcategory={subcategory} />

            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((product) => (
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

export function generateStaticParams() {
  const subcategories = {
    makeup: ["foundation", "contour", "concealer", "setting", "highlighter", "primer"],
    skincare: ["moisturizers", "cleansers", "serums", "masks", "sun-care"],
    fragrance: ["women", "men", "rollerballs", "candles"],
    hair: ["shampoo", "conditioner", "styling", "treatments"],
  };

  const params: { slug: string; subcategory: string }[] = [];
  for (const [slug, subs] of Object.entries(subcategories)) {
    for (const sub of subs) {
      params.push({ slug, subcategory: sub });
    }
  }
  return params;
}
