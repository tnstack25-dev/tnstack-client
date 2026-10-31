import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
        outline:
          "border border-border bg-background text-foreground hover:-translate-y-0.5 hover:border-primary/30 hover:bg-surface",
        ghost: "text-foreground hover:bg-surface",
        dark: "bg-[#2563eb] text-white hover:-translate-y-0.5 hover:bg-[#1d4ed8]",
        light:
          "bg-white text-dark hover:-translate-y-0.5 hover:bg-primary-soft",
      },
      size: {
        md: "h-11 px-5 text-sm",
        lg: "h-13 px-7 text-base shadow-sm",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
