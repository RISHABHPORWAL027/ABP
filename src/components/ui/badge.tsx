import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variantStyles = {
    default:
      "border-transparent bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/80 dark:bg-neutral-50 dark:text-neutral-900",
    secondary:
      "border-transparent bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50",
    destructive:
      "border-transparent bg-red-500 text-neutral-50 shadow hover:bg-red-500/80 dark:bg-red-900 dark:text-neutral-50",
    outline: "text-neutral-950 border border-neutral-300 dark:border-neutral-700 dark:text-neutral-50",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
