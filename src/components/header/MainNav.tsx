"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { clsx } from "clsx";
import { CHOSEN_FOR_YOU, APP_EARLY_ACCESS } from "@/lib/data";
import { useStore } from "@/lib/store";
import { AccountDropdown } from "@/components/auth/AuthModals";

// All searchable products
const ALL_PRODUCTS = [...CHOSEN_FOR_YOU, ...APP_EARLY_ACCESS];

export function MainNav() {
  const [query, setQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const {
    cartCount,
    favorites,
    isSignedIn,
    user,
    setCartOpen,
    setFavoritesOpen,
    setSignInOpen,
    setAccountMenuOpen,
    isAccountMenuOpen,
  } = useStore();

  // Filter results — AJAX search simulation
  const results =
    query.trim() === ""
      ? []
      : ALL_PRODUCTS.filter(
          (p) =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.brand.toLowerCase().includes(query.toLowerCase()),
        ).slice(0, 5);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const showResults = searchFocused && query.trim().length > 0;

  return (
    <div className="bg-white border-b border-neutral-200">
      <div className="mx-auto flex max-w-[var(--container-max)] items-center gap-4 px-4 py-4 md:gap-6 md:px-6">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Sephora home"
          className="shrink-0 text-2xl font-extrabold tracking-[0.14em] text-black md:text-3xl"
        >
          SEPHORA
        </Link>

        {/* Search Bar */}
        <div ref={searchRef} className="relative flex-1 max-w-2xl">
          <label htmlFor="main-search" className="sr-only">
            Search products, brands, and categories
          </label>
          <div className="relative">
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-neutral-500"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
                <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </span>
            <input
              id="main-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              placeholder="Search"
              autoComplete="off"
              aria-expanded={showResults}
              aria-controls="search-results"
              aria-autocomplete="list"
              role="combobox"
              className={clsx(
                "h-11 w-full border-2 border-neutral-300 bg-neutral-50 pl-11 pr-4 text-sm text-neutral-900 placeholder:text-neutral-500 transition-all duration-300 focus:border-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-black/20",
                searchFocused ? "rounded-lg" : "rounded-full"
              )}
            />
          </div>

          {/* AJAX Search Results */}
          {showResults && (
            <div
              id="search-results"
              role="listbox"
              aria-label="Search results"
              className="absolute top-full left-0 right-0 mt-2 rounded-xl border border-neutral-200 bg-white shadow-lg z-50 overflow-hidden"
            >
              {results.length === 0 ? (
                <div className="p-5 text-center text-sm text-neutral-500">
                  No results for &ldquo;{query}&rdquo;
                </div>
              ) : (
                <ul>
                  <li className="border-b border-neutral-100 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                    Products ({results.length})
                  </li>
                  {results.map((p) => (
                    <li key={p.id} role="option" aria-selected="false">
                      <Link
                        href={`/product/${p.id}`}
                        onClick={() => {
                          setSearchFocused(false);
                          setQuery("");
                        }}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-neutral-50 transition-colors"
                      >
                        <span className="h-10 w-10 shrink-0 overflow-hidden rounded-md bg-neutral-100">
                          <img
                            src={p.image}
                            alt=""
                            className="h-full w-full object-cover"
                            aria-hidden
                          />
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
                            {p.brand}
                          </div>
                          <div className="truncate text-sm font-medium text-neutral-900">
                            {p.name}
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-neutral-900">
                          ${p.priceMin.toFixed(2)}
                        </span>
                      </Link>
                    </li>
                  ))}
                  <li className="border-t border-neutral-100 bg-neutral-50">
                    <Link
                      href={`/search?q=${encodeURIComponent(query)}`}
                      onClick={() => {
                        setSearchFocused(false);
                        setQuery("");
                      }}
                      className="block w-full px-4 py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-neutral-900 hover:bg-neutral-100"
                    >
                      See all results for &ldquo;{query}&rdquo;
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* AI Beauty Chat */}
          <Link
            href="#chat"
            aria-label="Open AI Beauty Chat"
            className="group hidden items-center gap-2 rounded-full border border-neutral-200 px-4 py-2.5 text-sm font-semibold text-neutral-900 transition-all hover:border-black hover:bg-black hover:text-white md:flex"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="9" cy="12" r="1" fill="currentColor" />
              <circle cx="15" cy="12" r="1" fill="currentColor" />
              <path d="M8 3v3M16 3v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <span className="hidden lg:inline">AI Beauty Chat</span>
            <span className="lg:hidden">Chat</span>
          </Link>

          {/* Account / Sign in */}
          <div className="relative" data-account-menu>
            <button
              type="button"
              onClick={() => {
                if (isSignedIn) {
                  setAccountMenuOpen(!isAccountMenuOpen);
                } else {
                  setSignInOpen(true);
                }
              }}
              aria-label={isSignedIn ? "Open account menu" : "Sign in for free shipping"}
              aria-expanded={isAccountMenuOpen}
              className="flex flex-col items-center text-neutral-900 hover:text-black transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
                <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <span className="mt-0.5 text-[10px] font-medium leading-tight hidden md:block">
                {isSignedIn && user ? `Hi, ${user.firstName}` : "Sign in for FREE Shipping"}
              </span>
            </button>
            <AccountDropdown />
          </div>

          {/* Favorites */}
          <button
            type="button"
            onClick={() => setFavoritesOpen(true)}
            aria-label={`Open favorites list, ${favorites.length} items`}
            className="relative flex h-10 w-10 items-center justify-center rounded-full hover:bg-neutral-100 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-neutral-900">
              <path
                d="M12 21s-7-4.35-9.5-9.5a5.5 5.5 0 0 1 12 0c0 5.5-7 13-7 13z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {favorites.length > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--color-brand-accent)] px-1 text-[10px] font-bold text-white">
                {favorites.length}
              </span>
            )}
          </button>

          {/* Cart */}
          <button
            type="button"
            onClick={() => setCartOpen(true)}
            aria-label={`Open shopping bag, ${cartCount} items`}
            className="relative flex h-10 w-10 items-center justify-center rounded-full hover:bg-neutral-100 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-neutral-900">
              <path
                d="M6 7h12l-1 13H7L6 7zM9 7V5a3 3 0 0 1 6 0v2"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
