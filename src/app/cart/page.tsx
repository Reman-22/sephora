import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { CHOSEN_FOR_YOU } from "@/lib/data";

// Mock cart items
const CART_ITEMS = [
  { ...CHOSEN_FOR_YOU[0], quantity: 1 },
  { ...CHOSEN_FOR_YOU[1], quantity: 2 },
];

export default function CartPage() {
  const subtotal = CART_ITEMS.reduce((sum, item) => sum + item.priceMin * item.quantity, 0);
  const shipping = 0; // Free for insiders
  const total = subtotal + shipping;

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-[var(--container-max)] px-4 py-8 md:px-6 md:py-12">
        <h1 className="mb-6 text-2xl font-bold uppercase tracking-tight text-neutral-900 md:text-3xl">
          Your Bag ({CART_ITEMS.length})
        </h1>

        {CART_ITEMS.length === 0 ? (
          <div className="py-16 text-center">
            <p className="mb-4 text-lg text-neutral-500">Your bag is empty</p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-neutral-800"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
            {/* Cart Items */}
            <div className="space-y-4">
              {CART_ITEMS.map((item) => (
                <article
                  key={item.id}
                  className="flex gap-4 rounded-lg border border-neutral-200 bg-white p-4 md:gap-6 md:p-6"
                >
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md bg-neutral-100 md:h-32 md:w-32">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                          {item.brand}
                        </p>
                        <h2 className="mt-0.5 text-sm font-semibold text-neutral-900 md:text-base">
                          {item.name}
                        </h2>
                      </div>
                      <button
                        type="button"
                        aria-label={`Remove ${item.name} from bag`}
                        className="text-xs text-neutral-500 underline hover:text-black"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="mt-auto flex flex-wrap items-end justify-between gap-3">
                      {/* Quantity */}
                      <div className="flex items-center rounded-full border border-neutral-300">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          className="flex h-9 w-9 items-center justify-center text-neutral-700 hover:text-black"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          className="flex h-9 w-9 items-center justify-center text-neutral-700 hover:text-black"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="text-sm font-bold text-neutral-900">
                          ${(item.priceMin * item.quantity).toFixed(2)}
                        </p>
                        <p className="text-xs text-neutral-500">
                          ${(item.priceMin).toFixed(2)} each
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}

              {/* Continue shopping link */}
              <Link
                href="/"
                className="inline-flex items-center gap-2 pt-4 text-sm font-semibold text-neutral-900 underline hover:text-black"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Continue Shopping
              </Link>
            </div>

            {/* Order Summary */}
            <aside className="h-fit rounded-lg border border-neutral-200 bg-neutral-50 p-6">
              <h2 className="mb-4 text-base font-bold uppercase tracking-tight">
                Order Summary
              </h2>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt>Subtotal</dt>
                  <dd className="font-semibold">${subtotal.toFixed(2)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Shipping</dt>
                  <dd className="font-semibold text-emerald-700">FREE</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Estimated Tax</dt>
                  <dd className="font-semibold">Calculated at checkout</dd>
                </div>
                <div className="border-t border-neutral-200 pt-3">
                  <div className="flex justify-between text-base font-bold">
                    <dt>Total</dt>
                    <dd>${total.toFixed(2)}</dd>
                  </div>
                </div>
              </dl>

              {/* Promo code */}
              <div className="mt-5">
                <label htmlFor="promo" className="text-xs font-semibold uppercase tracking-wider text-neutral-700">
                  Promo Code
                </label>
                <div className="mt-1.5 flex gap-2">
                  <input
                    id="promo"
                    type="text"
                    placeholder="Enter code"
                    className="h-10 flex-1 rounded-full border border-neutral-300 bg-white px-4 text-sm focus:border-black focus:outline-none"
                  />
                  <button
                    type="button"
                    className="h-10 rounded-full border border-black bg-white px-4 text-xs font-semibold uppercase tracking-wider text-black hover:bg-black hover:text-white"
                  >
                    Apply
                  </button>
                </div>
              </div>

              {/* Checkout */}
              <button
                type="button"
                className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-black text-sm font-bold uppercase tracking-wider text-white hover:bg-neutral-800"
              >
                Checkout
              </button>

              <p className="mt-4 text-center text-[11px] text-neutral-500">
                Beauty Insiders get FREE shipping on all orders.
              </p>
            </aside>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
