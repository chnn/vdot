import classNames from "classnames";
import { ReactNode } from "react";

export const Txt = ({
  variant = "primary",
  size = "md",
  children,
}: {
  variant?: "primary" | "secondary";
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl";
  children: ReactNode;
}) => {
  const className = classNames({
    "text-(--color-text-primary)": variant === "primary",
    "text-(--color-text-secondary)": variant === "secondary",
    "text-xxs": size === "xxs",
    "text-xs": size === "xs",
    "text-sm": size === "sm",
    "text-md": size === "md",
    "text-lg": size === "lg",
    "text-xl": size === "xl",
  });

  return <span className={className}>{children}</span>;
};
