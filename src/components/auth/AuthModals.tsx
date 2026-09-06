"use client";

import { useEffect, useState } from "react";
import { useStore } from "@/lib/store";
import { clsx } from "clsx";

// =========================================================================
// Modal Shell
// =========================================================================
function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div
        aria-hidden
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full hover:bg-neutral-100 transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
            <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}

// =========================================================================
// Sign In Modal
// =========================================================================
export function SignInModal() {
  const { isSignInOpen, setSignInOpen, setSignUpOpen, signIn } = useStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepSigned, setKeepSigned] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signIn(email, password);
  };

  return (
    <Modal open={isSignInOpen} onClose={() => setSignInOpen(false)}>
      <div className="p-8">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold uppercase tracking-tight">Sign In</h2>
          <p className="mt-1 text-sm text-neutral-600">
            Welcome back! Sign in to your account.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="signin-email" className="text-xs font-semibold uppercase tracking-wider text-neutral-700">
              Email Address
            </label>
            <input
              id="signin-email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 h-11 w-full rounded-full border border-neutral-300 bg-white px-4 text-sm focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10"
              placeholder="name@example.com"
            />
          </div>

          <div>
            <label htmlFor="signin-password" className="text-xs font-semibold uppercase tracking-wider text-neutral-700">
              Password
            </label>
            <input
              id="signin-password"
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 h-11 w-full rounded-full border border-neutral-300 bg-white px-4 text-sm focus:border-black focus:outline-none focus:ring-2 focus:ring-black/10"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between text-xs">
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={keepSigned}
                onChange={(e) => setKeepSigned(e.target.checked)}
                className="h-4 w-4 rounded border-neutral-300"
              />
              <span className="text-neutral-700">Keep me signed in</span>
            </label>
            <a href="#forgot" className="font-semibold text-neutral-700 underline hover:text-black">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="mt-2 flex h-12 w-full items-center justify-center rounded-full bg-black text-sm font-bold uppercase tracking-wider text-white hover:bg-neutral-800 transition-colors"
          >
            Sign In
          </button>

          <button
            type="button"
            onClick={() => {
              setSignInOpen(false);
              setSignUpOpen(true);
            }}
            className="flex h-12 w-full items-center justify-center rounded-full border-2 border-black bg-white text-sm font-bold uppercase tracking-wider text-black hover:bg-black hover:text-white transition-colors"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-[11px] text-neutral-500">
          By signing in, you agree to our Terms of Use and Privacy Policy.
        </p>
      </div>
    </Modal>
  );
}

// =========================================================================
// Sign Up / Create Account Modal
// =========================================================================
export function CreateAccountModal() {
  const { isSignUpOpen, setSignUpOpen, setSignInOpen, signUp } = useStore();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dob: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signUp(form);
  };

  const update = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Modal open={isSignUpOpen} onClose={() => setSignUpOpen(false)}>
      <div className="p-8">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold uppercase tracking-tight">Create Account</h2>
          <p className="mt-1 text-sm text-neutral-600">
            Join Beauty Insider for exclusive rewards.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="signup-first" className="text-xs font-semibold uppercase tracking-wider text-neutral-700">
                First Name
              </label>
              <input
                id="signup-first"
                type="text"
                required
                autoComplete="given-name"
                value={form.firstName}
                onChange={(e) => update("firstName", e.target.value)}
                className="mt-1 h-11 w-full rounded-full border border-neutral-300 bg-white px-4 text-sm focus:border-black focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="signup-last" className="text-xs font-semibold uppercase tracking-wider text-neutral-700">
                Last Name
              </label>
              <input
                id="signup-last"
                type="text"
                required
                autoComplete="family-name"
                value={form.lastName}
                onChange={(e) => update("lastName", e.target.value)}
                className="mt-1 h-11 w-full rounded-full border border-neutral-300 bg-white px-4 text-sm focus:border-black focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="signup-email" className="text-xs font-semibold uppercase tracking-wider text-neutral-700">
              Email Address
            </label>
            <input
              id="signup-email"
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="mt-1 h-11 w-full rounded-full border border-neutral-300 bg-white px-4 text-sm focus:border-black focus:outline-none"
              placeholder="name@example.com"
            />
          </div>

          <div>
            <label htmlFor="signup-password" className="text-xs font-semibold uppercase tracking-wider text-neutral-700">
              Password
            </label>
            <input
              id="signup-password"
              type="password"
              required
              autoComplete="new-password"
              minLength={8}
              value={form.password}
              onChange={(e) => update("password", e.target.value)}
              className="mt-1 h-11 w-full rounded-full border border-neutral-300 bg-white px-4 text-sm focus:border-black focus:outline-none"
              placeholder="At least 8 characters"
            />
          </div>

          <div>
            <label htmlFor="signup-dob" className="text-xs font-semibold uppercase tracking-wider text-neutral-700">
              Date of Birth
            </label>
            <input
              id="signup-dob"
              type="date"
              required
              value={form.dob}
              onChange={(e) => update("dob", e.target.value)}
              className="mt-1 h-11 w-full rounded-full border border-neutral-300 bg-white px-4 text-sm focus:border-black focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="mt-2 flex h-12 w-full items-center justify-center rounded-full bg-black text-sm font-bold uppercase tracking-wider text-white hover:bg-neutral-800 transition-colors"
          >
            Create Account
          </button>

          <button
            type="button"
            onClick={() => {
              setSignUpOpen(false);
              setSignInOpen(true);
            }}
            className="flex h-12 w-full items-center justify-center rounded-full border-2 border-black bg-white text-sm font-bold uppercase tracking-wider text-black hover:bg-black hover:text-white transition-colors"
          >
            Already a member? Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-[11px] text-neutral-500">
          By creating an account, you agree to our Terms of Use and Privacy Policy.
        </p>
      </div>
    </Modal>
  );
}

// =========================================================================
// Account Dropdown Menu
// =========================================================================
export function AccountDropdown() {
  const { user, isAccountMenuOpen, setAccountMenuOpen, signOut, setSignInOpen } = useStore();

  useEffect(() => {
    if (!isAccountMenuOpen) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-account-menu]")) {
        setAccountMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isAccountMenuOpen, setAccountMenuOpen]);

  if (!isAccountMenuOpen || !user) return null;

  const greeting = (() => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  })();

  const links = [
    { label: "Beauty Preferences", icon: "💄", href: "#" },
    { label: "Rewards Bazaar", icon: "🎁", href: "#" },
    { label: "Buy It Again", icon: "🔄", href: "#" },
    { label: "Purchase History", icon: "📦", href: "#" },
    { label: "Auto-Replenish", icon: "♻️", href: "#" },
    { label: "My Lists (Favorites)", icon: "❤️", href: "#" },
    { label: "Account Settings", icon: "⚙️", href: "#" },
  ];

  return (
    <div
      data-account-menu
      className="absolute right-0 top-full z-40 mt-2 w-80 rounded-xl border border-neutral-200 bg-white shadow-2xl"
      role="menu"
    >
      {/* Header */}
      <div className="border-b border-neutral-200 bg-gradient-to-br from-rose-50 to-pink-50 p-5 rounded-t-xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-neutral-600">
          {greeting},
        </p>
        <p className="text-lg font-bold">Beautiful ✨</p>
        <div className="mt-3 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-600">
              Insider Points
            </p>
            <p className="text-xl font-bold">{user.points.toLocaleString()}</p>
          </div>
          <span className="rounded-full bg-black px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            {user.tier}
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-2">
        <ul className="flex flex-col">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                role="menuitem"
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-100"
              >
                <span aria-hidden className="text-base">{link.icon}</span>
                <span>{link.label}</span>
                <svg viewBox="0 0 24 24" fill="none" className="ml-auto h-4 w-4 text-neutral-400">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="border-t border-neutral-200 p-3">
        <button
          type="button"
          onClick={signOut}
          className="w-full rounded-full border border-neutral-300 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-900 hover:bg-neutral-100 transition-colors"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
