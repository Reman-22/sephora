"use client";

import Image from "next/image";
import Link from "next/link";
import { Drawer } from "@/components/ui/Drawer";
import { useStore, findProduct } from "@/lib/store";

export function MiniCart() {
  const {
    cart,
    isCartOpen,
    setCartOpen,
    cartTotal,
    cartCount,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useStore();

  const shipping = cartTotal >= 50 ? 0 : 7;
  const total = cartTotal + shipping;

  return (
    <Drawer
      open={isCartOpen}
      onClose={() => setCartOpen(false)}
      title={`Your Bag (${cartCount})`}
      footer={
        cart.length > 0 ? (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-600">Subtotal</span>
              <span className="font-bold">${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-600">Estimated Shipping</span>
              <span className="font-bold">
                {shipping === 0 ? (
                  <span className="text-emerald-700">FREE</span>
                ) : (
                  `$${shipping.toFixed(2)}`
                )}
              </span>
            </div>
            {cartTotal < 50 && (
              <p className="text-xs text-neutral-500">
                Add ${(50 - cartTotal).toFixed(2)} more for FREE shipping.
              </p>
            )}
            <div className="flex items-center justify-between border-t border-neutral-200 pt-3 text-base font-bold">
              <span>Estimated Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Link
              href="/cart"
              onClick={() => setCartOpen(false)}
              className="flex h-12 items-center justify-center rounded-full bg-black text-sm font-bold uppercase tracking-wider text-white hover:bg-neutral-800"
            >
              View Bag & Checkout
            </Link>
          </div>
        ) : null
      }
    >
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4 px-6 py-16 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-neutral-100">
            <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-neutral-400">
              <path
                d="M6 7h12l-1 13H7L6 7zM9 7V5a3 3 0 0 1 6 0v2"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-base font-bold">Your bag is empty</h3>
          <p className="text-sm text-neutral-600">
            Let's find something beautiful for you.
          </p>
          <Link
            href="/"
            onClick={() => setCartOpen(false)}
            className="inline-flex h-11 items-center justify-center rounded-full bg-black px-6 text-xs font-bold uppercase tracking-wider text-white hover:bg-neutral-800"
          >
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="divide-y divide-neutral-100">
          {/* Free shipping progress */}
          <div className="px-6 py-3">
            <div className="flex items-center gap-2 text-xs">
              <span className="font-semibold">
                {cartTotal >= 50 ? "You've got FREE shipping!" : "Almost there!"}
              </span>
            </div>
            <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-neutral-200">
              <div
                className="h-full bg-emerald-500 transition-all"
                style={{ width: `${Math.min(100, (cartTotal / 50) * 100)}%` }}
              />
            </div>
          </div>

          {cart.map((item) => {
            const product = findProduct(item.productId);
            if (!product) return null;
            return (
              <div key={item.productId} className="flex gap-4 p-6">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md bg-neutral-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
                        {product.brand}
                      </p>
                      <h4 className="mt-0.5 text-sm font-semibold leading-tight">
                        {product.name}
                      </h4>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.productId)}
                      aria-label={`Remove ${product.name}`}
                      className="text-xs text-neutral-500 hover:text-black underline"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <div className="flex items-center rounded-full border border-neutral-300">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                        aria-label="Decrease quantity"
                        className="flex h-8 w-8 items-center justify-center text-neutral-700 hover:text-black"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                        aria-label="Increase quantity"
                        className="flex h-8 w-8 items-center justify-center text-neutral-700 hover:text-black"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-sm font-bold">
                      ${(product.priceMin * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Clear cart */}
          <div className="px-6 py-4">
            <button
              type="button"
              onClick={clearCart}
              className="w-full text-xs font-medium text-neutral-500 underline hover:text-black"
            >
              Clear bag
            </button>
          </div>
        </div>
      )}
    </Drawer>
  );
}
