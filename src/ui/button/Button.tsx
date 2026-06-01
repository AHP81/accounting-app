import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "success" | "secondary" | "danger" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type Props = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  onClick,
  className,
}: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 cursor-pointer",

        /* SIZE */
        size === "sm" && "px-3 py-1.5 text-sm",
        size === "md" && "px-4 py-2 text-sm",
        size === "lg" && "px-5 py-3 text-base",

        /* WIDTH */
        fullWidth && "w-full",

        /* VARIANTS (using CSS tokens) */
        variant === "primary" &&
          "bg-[var(--button-primary-bg)] text-[var(--button-primary-text)] hover:bg-[var(--button-primary-hover)]",

        variant === "success" &&
        "bg-[var(--button-success-bg)] text-[var(--button-success-text)] hover:bg-[var(--button-success-hover)]",

        variant === "secondary" &&
          "bg-[var(--button-secondary-bg)] text-[var(--button-secondary-text)] hover:bg-[var(--button-secondary-hover)]",

        variant === "danger" &&
          "bg-[var(--button-danger-bg)] text-[var(--button-danger-text)] hover:bg-[var(--button-danger-hover)]",

        variant === "ghost" &&
          "bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-gray-100)]",

        /* STATES */
        disabled && "opacity-50 cursor-not-allowed",
        loading && "cursor-wait",

        className
      )}
    >
      {loading ? (
        <span className="animate-pulse">Loading...</span>
      ) : (
        <>
          {leftIcon && <span>{leftIcon}</span>}
          {children}
          {rightIcon && <span>{rightIcon}</span>}
        </>
      )}
    </button>
  );
}