"use client";

import Image from "next/image";
import Link from "next/link";
import { Drawer } from "@/components/ui/Drawer";
import { useStore, findProduct } from "@/lib/store";

export function FavoritesDrawer() {
  const {
    favorites,
    isFavoritesOpen,
    setFavoritesOpen,
    toggleFavorite,
    isSignedIn,
    setSignInOpen,
  } = useStore();

  return (
    <Drawer
      open={isFavoritesOpen}
      onClose={() => setFavoritesOpen(false)}
      title={`My Favorites (${favorites.length})`}
    >
      {favorites.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4 px-6 py-16 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-neutral-100">
            <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-neutral-400">
              <path
                d="M12 21s-7-4.35-9.5-9.5A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 5.5C19 16.65 12 21 12 21z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-base font-bold">Your favorites list is empty</h3>
          <p className="text-sm text-neutral-600">
            Save your favorite products here to find them easily later.
          </p>
          <Link
            href="/"
            onClick={() => setFavoritesOpen(false)}
            className="inline-flex h-11 items-center justify-center rounded-full bg-black px-6 text-xs font-bold uppercase tracking-wider text-white hover:bg-neutral-800"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="divide-y divide-neutral-100">
          {!isSignedIn && (
            <div className="bg-neutral-50 px-6 py-4">
              <p className="text-sm font-medium">
                Sign in to save your favorites across devices.
              </p>
              <button
                type="button"
                onClick={() => {
                  setFavoritesOpen(false);
                  setSignInOpen(true);
                }}
                className="mt-2 text-xs font-bold uppercase tracking-wider underline"
              >
                Sign In
              </button>
            </div>
          )}

          {favorites.map((id) => {
            const product = findProduct(id);
            if (!product) return null;
            return (
              <div key={id} className="flex gap-4 p-6">
                <Link
                  href={`/product/${product.id}`}
                  onClick={() => setFavoritesOpen(false)}
                  className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md bg-neutral-100"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </Link>
                <div className="flex flex-1 flex-col">
                  <Link
                    href={`/product/${product.id}`}
                    onClick={() => setFavoritesOpen(false)}
                    className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 hover:text-black"
                  >
                    {product.brand}
                  </Link>
                  <Link
                    href={`/product/${product.id}`}
                    onClick={() => setFavoritesOpen(false)}
                    className="mt-0.5 text-sm font-semibold leading-tight hover:underline"
                  >
                    {product.name}
                  </Link>
                  <div className="mt-1 flex items-center gap-1 text-xs text-neutral-600">
                    <span className="text-amber-500">★</span>
                    <span>{product.rating}</span>
                    <span>({product.reviewCount.toLocaleString()})</span>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <span className="text-sm font-bold">${product.priceMin.toFixed(2)}</span>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => toggleFavorite(id)}
                        aria-label="Remove from favorites"
                        className="rounded-full border border-neutral-300 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider hover:border-[var(--color-brand-accent)] hover:text-[var(--color-brand-accent)]"
                      >
                        Remove
                      </button>
                      <button
                        type="button"
                        className="rounded-full bg-black px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white hover:bg-neutral-800"
                      >
                        Add to Bag
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Drawer>
  );
}
