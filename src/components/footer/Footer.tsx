"use client";

import Link from "next/link";

const FOOTER_LINKS = {
  "About Sephora": [
    { label: "About", href: "#" },
    { label: "Newsroom", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Values", href: "#" },
    { label: "Supply Chain Transparency", href: "#" },
  ],
  "My Sephora": [
    { label: "Beauty Insider", href: "#" },
    { label: "Order Status", href: "#" },
    { label: "Purchase History", href: "#" },
    { label: "Account Settings", href: "#" },
    { label: "Beauty Insider Rewards", href: "#" },
  ],
  Help: [
    { label: "Customer Service", href: "#" },
    { label: "Returns & Exchanges", href: "#" },
    { label: "Shipping", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Store Locations", href: "#" },
  ],
};

const TOP_ACTION_BAR = [
  { label: "Find a Store", icon: "M12 22s-7-7.5-7-13a7 7 0 1 1 14 0c0 5.5-7 13-7 13zM12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" },
  { label: "Chat", icon: "M21 12a8 8 0 1 1-3.3-6.5L21 4v6h-4z" },
  { label: "Get the App", icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM9 9h6v1H9V9zm0 3h6v1H9v-1zm0 3h4v1H9v-1z" },
  { label: "Get Texts", icon: "M4 4h16v12H5.2L4 17.2V4z" },
  { label: "Sephora Credit Card", icon: "M3 7h18v10H3V7zm0 4h18v2H3v-2z" },
];

const REGIONS = ["United States — English", "Canada — Français"];

export function Footer() {
  return (
    <footer
      className="mt-10 bg-black text-white"
      aria-label="Site footer"
    >
      {/* Top action bar */}
      <div className="border-b border-white/15">
        <div className="mx-auto flex max-w-[var(--container-max)] flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-4 md:justify-around md:px-6">
          {TOP_ACTION_BAR.map((action) => (
            <Link
              key={action.label}
              href="#"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white hover:text-neutral-300 focus-visible:outline-2 focus-visible:outline-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4"
                aria-hidden
              >
                <path
                  d={action.icon}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
              <span>{action.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Main grid */}
      <div className="mx-auto max-w-[var(--container-max)] px-4 py-10 md:px-6 md:py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Newsletter column */}
          <div className="lg:col-span-1">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wider">
              Join Beauty Insider
            </h3>
            <p className="mb-4 text-sm text-neutral-300">
              Get birthday gifts, exclusive offers, and early access to new launches.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3"
            >
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="footer-mobile"
                  className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400"
                >
                  Mobile Phone
                </label>
                <input
                  id="footer-mobile"
                  type="tel"
                  autoComplete="tel"
                  className="h-10 rounded-full border border-white/30 bg-transparent px-4 text-sm text-white placeholder:text-neutral-500 focus:border-white focus:outline-none"
                  placeholder="(555) 555-5555"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="footer-email"
                  className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400"
                >
                  Email Address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  autoComplete="email"
                  className="h-10 rounded-full border border-white/30 bg-transparent px-4 text-sm text-white placeholder:text-neutral-500 focus:border-white focus:outline-none"
                  placeholder="name@example.com"
                />
              </div>
              <button
                type="submit"
                className="mt-1 inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-white"
              >
                Sign Up
              </button>
              <p className="text-[11px] text-neutral-400">
                By signing up, you agree to our Terms of Use and Privacy Policy.
              </p>
            </form>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-3 text-sm font-bold uppercase tracking-wider">
                {title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Region selector */}
        <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-white/15 pt-6">
          <label
            htmlFor="region-select"
            className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400"
          >
            Region & Language
          </label>
          <select
            id="region-select"
            defaultValue={REGIONS[0]}
            className="h-9 rounded-full border border-white/30 bg-transparent px-4 text-sm text-white focus:border-white focus:outline-none"
          >
            {REGIONS.map((r) => (
              <option key={r} value={r} className="bg-black">
                {r}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-[var(--container-max)] flex-col gap-4 px-4 py-5 text-xs text-neutral-400 md:flex-row md:items-center md:justify-between md:px-6">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} Sephora USA, Inc. All rights reserved.</span>
            <Link href="#" className="hover:text-white hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white hover:underline">
              Terms of Use
            </Link>
            <Link href="#" className="hover:text-white hover:underline">
              Accessibility
            </Link>
            <Link href="#" className="hover:text-white hover:underline">
              Sitemap
            </Link>
          </div>
          <div
            role="group"
            aria-label="Social media"
            className="flex items-center gap-3"
          >
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 transition-colors hover:bg-white hover:text-black"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 transition-colors hover:bg-white hover:text-black"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M13 22v-8h3l1-4h-4V7.5c0-1.2.4-2 2-2h2V2h-3c-3 0-5 1.8-5 5v3H6v4h3v8h4z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="X (formerly Twitter)"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 transition-colors hover:bg-white hover:text-black"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                <path d="M17 3h3l-5.5 6.3L20 21h-6.5l-4-5.8L5 21H2l6-6.9L2 3h6.5l3.6 5.3L17 3zm-1 16h1.5L8 5H6.5L16 19z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 transition-colors hover:bg-white hover:text-black"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M22 8.5s-.2-1.5-.8-2.2c-.8-.8-1.7-.8-2.1-.9C16.2 5 12 5 12 5s-4.2 0-7.1.4c-.4.1-1.3.1-2.1.9-.6.7-.8 2.2-.8 2.2S1.8 10 1.8 11.5v1c0 1.5.2 3 .2 3s.2 1.5.8 2.2c.8.8 1.9.8 2.4.9 1.7.2 7.8.4 7.8.4s4.2 0 7.1-.4c.4-.1 1.3-.1 2.1-.9.6-.7.8-2.2.8-2.2s.2-1.5.2-3v-1c0-1.5-.2-3-.2-3zM10 15V8l5.5 3.5L10 15z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
