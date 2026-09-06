import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "inverse";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-black text-white border border-black hover:bg-white hover:text-black focus-visible:bg-white focus-visible:text-black active:bg-neutral-200 disabled:cursor-not-allowed",
  secondary:
    "bg-white text-black border border-black hover:bg-black hover:text-white focus-visible:bg-black focus-visible:text-white active:bg-neutral-800 disabled:cursor-not-allowed",
  ghost:
    "bg-transparent text-black border border-transparent hover:bg-neutral-100 focus-visible:bg-neutral-200 active:bg-neutral-300 disabled:cursor-not-allowed",
  inverse:
    "bg-white text-black border border-white hover:bg-transparent hover:text-white focus-visible:bg-transparent focus-visible:text-white active:bg-white/80 disabled:cursor-not-allowed",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-2 text-xs font-semibold",
  md: "px-5 py-3 text-sm font-semibold",
  lg: "px-7 py-4 text-base font-bold",
};

const disabledClasses =
  "disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-inherit";

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  children,
  leftIcon,
  rightIcon,
  className = "",
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled || loading}
      aria-busy={loading}
      className={[
        "group inline-flex items-center justify-center gap-2 rounded-full uppercase tracking-[0.08em] transition-all duration-[var(--duration-fast)] ease-[var(--ease-out)]",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",
        variantClasses[variant],
        sizeClasses[size],
        disabledClasses,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {loading ? (
        <>
          <span
            aria-hidden
            className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
          />
          <span className="sr-only">Loading</span>
        </>
      ) : (
        <>
          {leftIcon && <span aria-hidden>{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span aria-hidden>{rightIcon}</span>}
        </>
      )}
    </button>
  );
}
