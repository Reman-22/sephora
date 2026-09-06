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

export default function HomePage() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
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
