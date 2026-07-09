"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  // Base classes for the button
  const baseClasses = "relative overflow-hidden font-mono uppercase tracking-widest text-sm font-bold px-8 py-4 flex items-center justify-center transition-colors duration-300";
  
  let variantClasses = "";
  if (variant === "primary") {
    variantClasses = "bg-charcoal text-canvas";
  } else if (variant === "secondary") {
    variantClasses = "bg-canvas text-charcoal border border-charcoal/10";
  } else if (variant === "outline") {
    variantClasses = "bg-transparent text-charcoal border border-charcoal";
  }

  return (
    <button
      ref={buttonRef}
      className={cn(baseClasses, variantClasses, className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-magenta origin-left z-0"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
      <span className={cn("relative z-10", isHovered && variant === "outline" ? "text-white" : "", isHovered && variant === "secondary" ? "text-white" : "")}>
        {children}
      </span>
    </button>
  );
}
