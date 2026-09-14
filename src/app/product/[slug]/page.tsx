import Link from "next/link";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo, StickyMobileCTA } from "@/components/product/ProductInfo";
import { ProductHighlights } from "@/components/product/ProductHighlights";
import { ProductAccordions } from "@/components/product/ProductAccordions";
import { ProductRecommendations } from "@/components/product/ProductRecommendations";
import { findProductDetails } from "@/lib/product-data";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = findProductDetails(slug);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1} className="pb-24 md:pb-12">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-[var(--container-max)] px-4 py-4 md:px-6">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-neutral-500">
            <Link href="/" className="hover:text-black hover:underline">
              Home
            </Link>
            <span aria-hidden>/</span>
            <Link href={`/category/${product.category}`} className="hover:text-black hover:underline capitalize">
              {product.category}
            </Link>
            <span aria-hidden>/</span>
            <Link href="#" className="hover:text-black hover:underline">
              {product.brand}
            </Link>
            <span aria-hidden>/</span>
            <span className="font-medium text-neutral-900">{product.name}</span>
          </nav>
        </div>

        {/* Two-column layout: Gallery (left) + Info (right) */}
        <section className="mx-auto max-w-[var(--container-max)] px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-[1fr_1fr] lg:gap-14">
            {/* Left: Product Media Gallery */}
            <div>
              <ProductGallery media={product.media} />
            </div>

            {/* Right: Product Information & Purchasing Block */}
            <div>
              <ProductInfo product={product} />
            </div>
          </div>
        </section>

        {/* Product Highlights Banner */}
        <ProductHighlights product={product} />

        {/* Product Details Accordions */}
        <div className="mx-auto max-w-4xl">
          <ProductAccordions product={product} />
        </div>

        {/* Reviews Section (placeholder) */}
        <section
          id="reviews"
          aria-labelledby="reviews-heading"
          className="mx-auto max-w-[var(--container-max)] px-4 py-8 md:px-6"
        >
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-6">
              <div>
                <h2
                  id="reviews-heading"
                  className="text-lg font-bold uppercase tracking-tight text-neutral-900 md:text-xl"
                >
                  Customer Reviews
                </h2>
                <p className="mt-1 text-sm text-neutral-600">
                  Based on {product.reviewCount.toLocaleString()} reviews
                </p>
              </div>
              <div className="ml-auto flex items-center gap-3">
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" fill={i < Math.round(product.rating) ? "currentColor" : "#e5e7eb"} className="h-5 w-5">
                      <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.5L6 22l1.5-7.2L2 10l7.1-1.1z" />
                    </svg>
                  ))}
                </div>
                <span className="text-2xl font-bold text-neutral-900">{product.rating}</span>
              </div>
              <Link
                href="#write"
                className="inline-flex items-center rounded-full bg-black px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-neutral-800"
              >
                Write a Review
              </Link>
            </div>
          </div>
        </section>

        {/* Product Recommendations */}
        <ProductRecommendations
          similarIds={product.similarProducts}
          alsoLikeIds={product.youMayAlsoLike}
        />
      </main>

      {/* Sticky mobile CTA */}
      <StickyMobileCTA product={product} />
      <Footer />
    </>
  );
}

export function generateStaticParams() {
  // In production, generate for all product slugs
  return [
    { slug: "jo-malone-english-pear" },
    { slug: "fenty-pro-filt" },
    { slug: "le-labo-santal-33" },
  ];
}
