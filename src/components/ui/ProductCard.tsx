"use client";

import Image from "next/image";
import type { Product } from "@/lib/types";
import { StarRating } from "./StarRating";
import { Badge } from "./Badge";
import { clsx } from "clsx";
import { useStore } from "@/lib/store";

interface ProductCardProps {
  product: Product;
  wishlistable?: boolean;
  className?: string;
}

function formatPrice(price: number): string {
  return price.toFixed(2);
}

export function ProductCard({
  product,
  wishlistable = true,
  className,
}: ProductCardProps) {
  const { addToCart, toggleFavorite, isFavorite, setCartOpen } = useStore();
  const favorited = isFavorite(product.id);

  const priceText = product.priceMax
    ? `$${formatPrice(product.priceMin)} – $${formatPrice(product.priceMax)}`
    : `$${formatPrice(product.priceMin)}`;

  const badgeTone = (() => {
    switch (product.badge) {
      case "new":
        return "black";
      case "app-exclusive":
        return "purple";
      case "limited":
        return "red";
      case "clean":
        return "green";
      case "bestseller":
        return "amber";
      default:
        return "black";
    }
  })();

  const handleAddToBag = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product.id);
    setCartOpen(true);
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(product.id);
  };

  return (
    <article
      className={clsx(
        "group relative flex flex-col rounded-lg bg-white p-2 transition-shadow duration-[var(--duration-fast)] ease-[var(--ease-out)] hover:shadow-md focus-within:shadow-md",
        className,
      )}
    >
      {/* Media */}
      <a
        href={`/product/${product.id}`}
        aria-label={`${product.brand} — ${product.name}. ${priceText}. Rating ${product.rating} stars`}
        className="relative mb-3 block overflow-hidden rounded-md bg-neutral-100"
      >
        <div className="relative aspect-square w-full">
          <Image
            src={product.image}
            alt={`${product.brand} ${product.name}`}
            fill
            sizes="(min-width: 1280px) 240px, (min-width: 1024px) 200px, (min-width: 768px) 180px, 40vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
          />
        </div>

        {/* Badge */}
        {product.badgeText && (
          <span className="absolute left-2 top-2">
            <Badge tone={badgeTone}>{product.badgeText}</Badge>
          </span>
        )}

        {/* Wishlist heart — top-right */}
        {wishlistable && (
          <button
            type="button"
            onClick={handleToggleFavorite}
            aria-pressed={favorited}
            aria-label={favorited ? `Remove ${product.name} from favorites` : `Add ${product.name} to favorites`}
            className={clsx(
              "absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full shadow-sm backdrop-blur transition-all",
              favorited
                ? "bg-[var(--color-brand-accent)] text-white"
                : "bg-white/90 text-neutral-900 hover:bg-black hover:text-white",
            )}
          >
            <svg
              viewBox="0 0 24 24"
              fill={favorited ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-4 w-4"
            >
              <path
                d="M12 21s-7-4.35-9.5-9.5A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 5.5C19 16.65 12 21 12 21z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </a>

      {/* Meta */}
      <div className="flex flex-1 flex-col gap-1 px-1 pb-1">
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-900">
          {product.brand}
        </p>
        <a
          href={`/product/${product.id}`}
          className="line-clamp-2 text-sm font-medium text-neutral-900 hover:underline focus-visible:outline-none"
        >
          {product.name}
        </a>
        <p className="line-clamp-2 text-xs text-neutral-600">
          {product.description}
        </p>

        <StarRating
          rating={product.rating}
          reviewCount={product.reviewCount}
          size="sm"
          className="mt-1"
        />

        {/* Makeup color swatches */}
        {product.colors && product.colors.length > 0 && (
          <div className="mt-2 flex items-center gap-1.5 flex-wrap" aria-label="Available shades">
            {product.colors.map((color, idx) => (
              <span
                key={idx}
                className="h-3.5 w-3.5 rounded-full border border-neutral-300 ring-1 ring-transparent hover:ring-black cursor-pointer transition-all hover:scale-110"
                style={{ backgroundColor: color }}
                title="shade option"
              />
            ))}
          </div>
        )}

        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex flex-col">
            {product.originalPrice ? (
              <>
                <span className="text-xs text-neutral-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
                <span className="text-sm font-bold text-[var(--color-brand-accent)]">
                  {priceText}
                </span>
              </>
            ) : (
              <span className="text-sm font-bold text-neutral-900">{priceText}</span>
            )}
          </div>
          <button
            type="button"
            onClick={handleAddToBag}
            className="rounded-full bg-black px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-neutral-800 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            aria-label={`Add ${product.name} to bag`}
          >
            Add to Bag
          </button>
        </div>
      </div>
    </article>
  );
}
