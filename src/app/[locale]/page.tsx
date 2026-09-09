import { Header } from "@/components/header/Header";
import { HeroBanners } from "@/components/home/HeroBanners";
import { ChosenForYou } from "@/components/home/ChosenForYou";
import { AppEarlyAccess } from "@/components/home/AppEarlyAccess";
import { BeautyOffers } from "@/components/home/BeautyOffers";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { BeautyInsiderRewards } from "@/components/home/BeautyInsiderRewards";
import { QuickLinksBanner } from "@/components/home/QuickLinksBanner";
import { PaymentBanner } from "@/components/home/PaymentBanner";
import { Footer } from "@/components/footer/Footer";
import { getMessages } from "next-intl/server";
import { locales } from "@/i18n";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <>
      <a href="#main-content" className="skip-link">
        {messages.common.skipToContent}
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <HeroBanners />
        <ChosenForYou />
        <AppEarlyAccess />
        <BeautyOffers />
        <ProductShowcase />
        <BeautyInsiderRewards />
        <QuickLinksBanner />
        <PaymentBanner />
      </main>
      <Footer />
    </>
  );
}