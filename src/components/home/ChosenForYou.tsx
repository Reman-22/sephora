import { Carousel, CarouselItem } from "@/components/ui/Carousel";
import { ProductCard } from "@/components/ui/ProductCard";
import { CHOSEN_FOR_YOU } from "@/lib/data";

export function ChosenForYou() {
  return (
    <Carousel
      ariaLabel="Chosen for you, personalized product recommendations"
      title="Chosen For You"
      subtitle="Personalized based on your preferences"
      scrollStepPx={420}
    >
      {CHOSEN_FOR_YOU.map((product) => (
        <CarouselItem key={product.id}>
          <ProductCard product={product} />
        </CarouselItem>
      ))}
    </Carousel>
  );
}
