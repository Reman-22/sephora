import { UtilityBar } from "./UtilityBar";
import { MainNav } from "./MainNav";
import { CategoryBar } from "./CategoryBar";
import { MiniCart } from "@/components/cart/MiniCart";
import { FavoritesDrawer } from "@/components/favorites/FavoritesDrawer";
import { SignInModal, CreateAccountModal } from "@/components/auth/AuthModals";

export function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <UtilityBar />
        <MainNav />
        <CategoryBar />
      </header>

      {/* Global drawers and modals */}
      <MiniCart />
      <FavoritesDrawer />
      <SignInModal />
      <CreateAccountModal />
    </>
  );
}
