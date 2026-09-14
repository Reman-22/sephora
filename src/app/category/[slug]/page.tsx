import { ProductCard } from "@/components/ui/ProductCard";
import { NEW_ARRIVALS, SELLING_FAST, CHOSEN_FOR_YOU, APP_EARLY_ACCESS } from "@/lib/data";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { FilterSidebar } from "@/components/filters/FilterSidebar";

// Mock data for category pages (combine all available products)
const ALL_PRODUCTS = [...CHOSEN_FOR_YOU, ...APP_EARLY_ACCESS, ...NEW_ARRIVALS, ...SELLING_FAST];

const CATEGORY_DATA: Record<string, { name: string; description: string; products: typeof ALL_PRODUCTS }> = {
  new: {
    name: "New Arrivals",
    description: "Discover the latest beauty products from top brands",
    products: NEW_ARRIVALS,
  },
  deals: {
    name: "50% Off Deals",
    description: "Save big on select beauty favorites",
    products: ALL_PRODUCTS.slice(0, 8),
  },
  makeup: {
    name: "Makeup",
    description: "Shop all makeup products — face, eye, lip, and more",
    products: [...CHOSEN_FOR_YOU, ...NEW_ARRIVALS.slice(0, 3)],
  },
  skincare: {
    name: "Skincare",
    description: "Complete your skincare routine with cleansers, serums, moisturizers, and more",
    products: [...SELLING_FAST, ...NEW_ARRIVALS.slice(0, 2)],
  },
  fragrance: {
    name: "Fragrance",
    description: "Explore perfumes, colognes, and home fragrances",
    products: ALL_PRODUCTS.filter((p) => p.category === "fragrance"),
  },
  hair: {
    name: "Hair",
    description: "Shampoo, conditioner, styling, and treatments for all hair types",
    products: ALL_PRODUCTS.filter((p) => p.category === "hair"),
  },
  "bath-body": {
    name: "Bath & Body",
    description: "Pamper yourself with luxurious bath and body products",
    products: ALL_PRODUCTS.slice(4, 10),
  },
  mini: {
    name: "Mini Size",
    description: "Try before you buy with travel and mini sizes",
    products: ALL_PRODUCTS.slice(0, 6),
  },
  brands: {
    name: "Brands",
    description: "Shop all your favorite beauty brands in one place",
    products: ALL_PRODUCTS,
  },
  gifts: {
    name: "Gifts & Value Sets",
    description: "The perfect gifts for every beauty lover",
    products: ALL_PRODUCTS.slice(2, 8),
  },
  "gift-cards": {
    name: "Gift Cards",
    description: "Share the gift of choice with Sephora gift cards",
    products: [],
  },
  sale: {
    name: "Sale & Offers",
    description: "Shop our latest sales and special offers",
    products: ALL_PRODUCTS.slice(0, 10),
  },
};

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  let category = CATEGORY_DATA[slug] || CATEGORY_DATA.new;

  // Custom dynamic modification for 50% Off Deals
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

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        {/* Breadcrumb */}
        <div className="mx-auto max-w-[var(--container-max)] px-4 py-4 md:px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-500">
            <a href="/" className="hover:text-black hover:underline">
              Home
            </a>
            <span aria-hidden>/</span>
            <span className="font-medium text-neutral-900">{category.name}</span>
          </nav>
        </div>

        {/* Category Header */}
        <div className="mx-auto max-w-[var(--container-max)] px-4 pb-6 md:px-6">
          <h1 className="text-2xl font-bold uppercase tracking-tight text-neutral-900 md:text-3xl">
            {category.name}
          </h1>
          <p className="mt-2 text-sm text-neutral-600 md:text-base">{category.description}</p>
        </div>

        {/* Sort bar */}
        <div className="mx-auto max-w-[var(--container-max)] border-t border-neutral-200 px-4 py-4 md:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-neutral-500">
              <strong className="text-neutral-900">{category.products.length}</strong> products
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
            <FilterSidebar activeCategory={slug} />

            {/* Product Grid */}
            <div className="flex-1">
              {category.products.length === 0 ? (
                <div className="py-16 text-center">
                  <p className="text-lg text-neutral-500">No products found in this category.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {category.products.map((product) => (
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

export function generateStaticParams() {
  return [
    { slug: "new" },
    { slug: "deals" },
    { slug: "makeup" },
    { slug: "skincare" },
    { slug: "fragrance" },
    { slug: "hair" },
    { slug: "bath-body" },
    { slug: "mini" },
    { slug: "brands" },
    { slug: "gifts" },
    { slug: "gift-cards" },
    { slug: "sale" },
  ];
}
