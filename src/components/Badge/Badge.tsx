import React from "react";
import { BadgeStyles as styles } from "./Badge.style";

export type BadgeVariant = "success" | "warning" | "danger" | "info" | "default" | "purple";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const variantClass = styles.variants[variant] || styles.variants.default;
  
  return (
    <span className={`${styles.base} ${variantClass} ${className}`}>
      {children}
    </span>
  );
}
