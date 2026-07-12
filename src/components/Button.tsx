"use client";

import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "px-6 py-3 rounded-lg font-mono text-sm uppercase tracking-widest font-bold transition-all duration-300",
        variant === "primary" && "bg-magenta text-white hover:shadow-lg hover:shadow-magenta/50 hover:scale-105",
        variant === "secondary" && "bg-cyan text-charcoal hover:shadow-lg hover:shadow-cyan/50 hover:scale-105",
        variant === "outline" && "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-canvas",
        className
      )}
      {...props}
    />
  );
}