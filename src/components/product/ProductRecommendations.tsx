import { Carousel, CarouselItem } from "@/components/ui/Carousel";
import { ProductCard } from "@/components/ui/ProductCard";
import type { Product } from "@/lib/types";
import { CHOSEN_FOR_YOU, NEW_ARRIVALS } from "@/lib/data";

interface ProductRecommendationsProps {
  similarIds?: string[];
  alsoLikeIds?: string[];
}

export function ProductRecommendations({
  similarIds,
  alsoLikeIds,
}: ProductRecommendationsProps) {
  // Use mock data for recommendations — in production, map IDs to products
  const similarProducts: Product[] = CHOSEN_FOR_YOU.slice(0, 6);
  const alsoLikeProducts: Product[] = NEW_ARRIVALS.slice(0, 6);

  return (
    <>
      <Carousel
        ariaLabel="Similar products"
        title="Similar Products"
        subtitle="Other fragrances you might love"
        scrollStepPx={420}
      >
        {similarProducts.map((product) => (
          <CarouselItem key={product.id}>
            <ProductCard product={product} />
          </CarouselItem>
        ))}
      </Carousel>

      <Carousel
        ariaLabel="You may also like"
        title="You May Also Like"
        subtitle="Complete your beauty routine"
        scrollStepPx={420}
        className="bg-neutral-50"
      >
        {alsoLikeProducts.map((product) => (
          <CarouselItem key={product.id}>
            <ProductCard product={product} />
          </CarouselItem>
        ))}
      </Carousel>
    </>
  );
}
