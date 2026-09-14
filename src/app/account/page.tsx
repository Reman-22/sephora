"use client";

import Link from "next/link";
import { useState } from "react";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { clsx } from "clsx";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "orders", label: "Order Status" },
  { id: "insider", label: "Beauty Insider" },
  { id: "settings", label: "Account Settings" },
  { id: "addresses", label: "Addresses" },
  { id: "payments", label: "Payments" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function AccountPage() {
  const [tab, setTab] = useState<TabId>("overview");
  const [signedIn] = useState(false); // Mock state — always signed-out view

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-[var(--container-max)] px-4 py-8 md:px-6 md:py-12">
        <h1 className="mb-6 text-2xl font-bold uppercase tracking-tight text-neutral-900 md:text-3xl">
          My Account
        </h1>

        {!signedIn ? (
          // Sign in prompt
          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-8 text-center md:p-12">
            <h2 className="text-xl font-bold uppercase tracking-tight">Sign In</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-neutral-600">
              Sign in to access your Beauty Insider points, order history, and saved addresses.
            </p>
            <div className="mx-auto mt-6 max-w-sm space-y-3">
              <div>
                <label htmlFor="email" className="text-left text-[11px] font-semibold uppercase tracking-wider text-neutral-700">
                  Email or Phone
                </label>
                <input
                  id="email"
                  type="text"
                  autoComplete="username"
                  className="mt-1 h-11 w-full rounded-full border border-neutral-300 bg-white px-4 text-sm focus:border-black focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="password" className="text-left text-[11px] font-semibold uppercase tracking-wider text-neutral-700">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  className="mt-1 h-11 w-full rounded-full border border-neutral-300 bg-white px-4 text-sm focus:border-black focus:outline-none"
                />
              </div>
              <button
                type="button"
                className="mt-2 inline-flex h-11 w-full items-center justify-center rounded-full bg-black text-sm font-bold uppercase tracking-wider text-white hover:bg-neutral-800"
              >
                Sign In
              </button>
              <button
                type="button"
                className="inline-flex h-11 w-full items-center justify-center rounded-full border border-black bg-white text-sm font-bold uppercase tracking-wider text-black hover:bg-black hover:text-white"
              >
                Join Beauty Insider
              </button>
              <Link href="#" className="text-xs font-medium text-neutral-700 underline hover:text-black">
                Forgot password?
              </Link>
            </div>
          </div>
        ) : (
          // Signed-in view
          <div className="grid gap-8 md:grid-cols-[240px_1fr]">
            {/* Sidebar tabs */}
            <aside aria-label="Account sections">
              <ul className="flex flex-col gap-1">
                {TABS.map((t) => (
                  <li key={t.id}>
                    <button
                      type="button"
                      onClick={() => setTab(t.id)}
                      aria-current={tab === t.id ? "page" : undefined}
                      className={clsx(
                        "flex w-full items-center rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors",
                        tab === t.id
                          ? "bg-black text-white"
                          : "text-neutral-700 hover:bg-neutral-100",
                      )}
                    >
                      {t.label}
                    </button>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Content */}
            <section className="rounded-xl border border-neutral-200 bg-white p-6">
              <h2 className="mb-4 text-lg font-bold uppercase tracking-tight">
                {TABS.find((t) => t.id === tab)?.label}
              </h2>
              {tab === "overview" && (
                <div className="space-y-3 text-sm text-neutral-700">
                  <p>Welcome back! You have <strong>1,250 points</strong> available.</p>
                  <p>Your current tier: <strong>Beauty Insider</strong>.</p>
                  <p>Points to VIB: <strong>1,250 more</strong>.</p>
                </div>
              )}
              {tab === "orders" && (
                <p className="text-sm text-neutral-600">No recent orders.</p>
              )}
              {tab === "insider" && (
                <p className="text-sm text-neutral-600">Beauty Insider benefits overview.</p>
              )}
              {tab === "settings" && (
                <p className="text-sm text-neutral-600">Manage your account settings.</p>
              )}
              {tab === "addresses" && (
                <p className="text-sm text-neutral-600">No saved addresses.</p>
              )}
              {tab === "payments" && (
                <p className="text-sm text-neutral-600">No saved payment methods.</p>
              )}
            </section>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
