import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { StoreProvider } from "@/lib/store";

export const metadata: Metadata = {
  title: "Sephora — Makeup, Skincare, Fragrance, Hair & Beauty",
  description:
    "Shop thousands of beauty products from top brands. Makeup, skincare, fragrance, hair, bath & body — with free shipping, Beauty Insider rewards, and exclusive app deals.",
  keywords: [
    "sephora",
    "makeup",
    "skincare",
    "fragrance",
    "hair",
    "beauty",
    "beauty insider",
  ],
  authors: [{ name: "Sephora" }],
  openGraph: {
    title: "Sephora — Makeup, Skincare, Fragrance, Hair & Beauty",
    description: "Shop thousands of beauty products with free shipping and Beauty Insider rewards.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900 antialiased">
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
