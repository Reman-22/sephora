"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import type { Product } from "@/lib/types";
import { CHOSEN_FOR_YOU, APP_EARLY_ACCESS, NEW_ARRIVALS, SELLING_FAST } from "@/lib/data";

// =========================================================================
// All known products for lookup
// =========================================================================
const ALL_PRODUCTS: Product[] = [
  ...CHOSEN_FOR_YOU,
  ...APP_EARLY_ACCESS,
  ...NEW_ARRIVALS,
  ...SELLING_FAST,
];

export function findProduct(id: string): Product | undefined {
  return ALL_PRODUCTS.find((p) => p.id === id);
}

// =========================================================================
// Cart Item Type
// =========================================================================
export interface CartItem {
  productId: string;
  quantity: number;
  variant?: string;
}

// =========================================================================
// User Type
// =========================================================================
export interface User {
  firstName: string;
  lastName: string;
  email: string;
  points: number;
  tier: "Beauty Insider" | "VIB" | "Rouge";
  memberSince: string;
}

// =========================================================================
// Store Context Shape
// =========================================================================
interface StoreState {
  // Cart
  cart: CartItem[];
  addToCart: (productId: string, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  isCartOpen: boolean;
  setCartOpen: (open: boolean) => void;

  // Favorites
  favorites: string[];
  toggleFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
  isFavoritesOpen: boolean;
  setFavoritesOpen: (open: boolean) => void;

  // Auth
  user: User | null;
  isSignedIn: boolean;
  isSignInOpen: boolean;
  isSignUpOpen: boolean;
  signIn: (email: string, password: string) => void;
  signUp: (data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    dob: string;
  }) => void;
  signOut: () => void;
  setSignInOpen: (open: boolean) => void;
  setSignUpOpen: (open: boolean) => void;
  isAccountMenuOpen: boolean;
  setAccountMenuOpen: (open: boolean) => void;
}

const StoreContext = createContext<StoreState | null>(null);

// =========================================================================
// Provider
// =========================================================================
export function StoreProvider({ children }: { children: ReactNode }) {
  // Cart state
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setCartOpen] = useState(false);

  // Favorites state
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isFavoritesOpen, setFavoritesOpen] = useState(false);

  // Auth state
  const [user, setUser] = useState<User | null>(null);
  const [isSignInOpen, setSignInOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isAccountMenuOpen, setAccountMenuOpen] = useState(false);

  // Load persisted state
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("sephora-cart");
      const savedFavs = localStorage.getItem("sephora-favorites");
      const savedUser = localStorage.getItem("sephora-user");
      if (savedCart) setCart(JSON.parse(savedCart));
      if (savedFavs) setFavorites(JSON.parse(savedFavs));
      if (savedUser) setUser(JSON.parse(savedUser));
    } catch {
      // ignore
    }
  }, []);

  // Persist cart
  useEffect(() => {
    localStorage.setItem("sephora-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("sephora-favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    if (user) {
      localStorage.setItem("sephora-user", JSON.stringify(user));
    } else {
      localStorage.removeItem("sephora-user");
    }
  }, [user]);

  // Cart actions
  const addToCart = useCallback((productId: string, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.productId === productId);
      if (existing) {
        return prev.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...prev, { productId, quantity }];
    });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCart((prev) => prev.filter((item) => item.productId !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      setCart((prev) => prev.filter((item) => item.productId !== productId));
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.productId === productId ? { ...item, quantity } : item,
      ),
    );
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const cartTotal = cart.reduce((sum, item) => {
    const product = findProduct(item.productId);
    if (!product) return sum;
    return sum + product.priceMin * item.quantity;
  }, 0);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Favorites actions
  const toggleFavorite = useCallback((productId: string) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  }, []);

  const isFavorite = useCallback(
    (productId: string) => favorites.includes(productId),
    [favorites],
  );

  // Auth actions
  const signIn = useCallback((email: string, _password: string) => {
    const name = email.split("@")[0] || "Beautiful";
    const firstName = name.charAt(0).toUpperCase() + name.slice(1);
    setUser({
      firstName,
      lastName: "",
      email,
      points: 1250,
      tier: "Beauty Insider",
      memberSince: "2023",
    });
    setSignInOpen(false);
    setSignUpOpen(false);
  }, []);

  const signUp = useCallback(
    (data: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      dob: string;
    }) => {
      setUser({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        points: 0,
        tier: "Beauty Insider",
        memberSince: new Date().getFullYear().toString(),
      });
      setSignUpOpen(false);
      setSignInOpen(false);
    },
    [],
  );

  const signOut = useCallback(() => {
    setUser(null);
    setAccountMenuOpen(false);
  }, []);

  const value: StoreState = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartCount,
    isCartOpen,
    setCartOpen,
    favorites,
    toggleFavorite,
    isFavorite,
    isFavoritesOpen,
    setFavoritesOpen,
    user,
    isSignedIn: user !== null,
    isSignInOpen,
    isSignUpOpen,
    signIn,
    signUp,
    signOut,
    setSignInOpen,
    setSignUpOpen,
    isAccountMenuOpen,
    setAccountMenuOpen,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore(): StoreState {
  const ctx = useContext(StoreContext);
  if (!ctx) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return ctx;
}
