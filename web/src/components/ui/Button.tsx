import * as React from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "dark" | "light" | "link";

type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  const base =
    "font-heading slope relative inline-flex items-center justify-center overflow-hidden font-semibold whitespace-nowrap transition-all duration-500";

  const sizes: Record<ButtonSize, string> = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 max-md:text-sm max-sm:px-4",
    lg: "h-14 px-8 max-md:h-12 max-sm:px-6",
  };

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-primary text-primary-foreground before:absolute before:top-0 before:right-0 before:h-full before:w-[140%] before:translate-x-[55%] before:skew-x-[-25deg] before:bg-primary-dark before:transition-transform before:duration-500 hover:bg-primary-dark hover:before:translate-x-[120%]",

    dark: "bg-black/5 text-black before:absolute before:top-0 before:right-0 before:h-full before:w-[140%] before:translate-x-[55%] before:skew-x-[-25deg] before:bg-black/5 before:transition-transform before:duration-500 hover:bg-black hover:text-white hover:before:translate-x-[120%]",

    light:
      "bg-white/5 text-white backdrop-blur-sm before:absolute before:top-0 before:right-0 before:h-full before:w-[140%] before:translate-x-[55%] before:skew-x-[-25deg] before:bg-white/10 before:transition-transform before:duration-500 hover:bg-white hover:text-black hover:before:translate-x-[120%]",

    link: "h-auto px-0 bg-transparent text-primary-darker hover:underline",
  };

  return (
    <button
      {...props}
      className={clsx(base, variant !== "link" && sizes[size], variants[variant], className)}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}

export default Button;
