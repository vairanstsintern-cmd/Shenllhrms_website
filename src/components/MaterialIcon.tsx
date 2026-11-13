import React from "react";

export type MaterialIconVariant = "rounded" | "outlined" | "sharp";

export interface MaterialIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: string;
  variant?: MaterialIconVariant;
  size?: number | string;
  fill?: boolean;
  weight?: number;
  grade?: number;
  opticalSize?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Google Material Symbols & Icons component for Next.js
 * Works with both the bundled self-hosted `material-symbols` package
 * and Google Fonts CDN.
 */
export default function MaterialIcon({
  name,
  variant = "rounded",
  size = 24,
  fill = false,
  weight = 300,
  grade = 0,
  opticalSize,
  className = "",
  style,
  ...props
}: MaterialIconProps) {
  const variantClass =
    variant === "outlined"
      ? "material-symbols-outlined"
      : variant === "sharp"
      ? "material-symbols-sharp"
      : "material-symbols-rounded";

  const numSize = typeof size === "number" ? size : undefined;
  // Material Symbols opsz axis supports range 20..48
  const opsz = opticalSize ?? (numSize ? Math.min(48, Math.max(20, Math.round(numSize))) : 24);

  const fontVariation = `'FILL' ${fill ? 1 : 0}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opsz}`;

  const resolvedSize = typeof size === "number" ? `${size}px` : size;

  const combinedStyle: React.CSSProperties = {
    fontFamily:
      variant === "outlined"
        ? "'Material Symbols Outlined', 'Material Symbols Rounded', sans-serif"
        : variant === "sharp"
        ? "'Material Symbols Sharp', 'Material Symbols Rounded', sans-serif"
        : "'Material Symbols Rounded', sans-serif",
    fontVariationSettings: fontVariation,
    fontSize: resolvedSize,
    width: resolvedSize,
    height: resolvedSize,
    minWidth: resolvedSize,
    minHeight: resolvedSize,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 1,
    userSelect: "none",
    verticalAlign: "middle",
    flexShrink: 0,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    textRendering: "optimizeLegibility",
    ...style,
  };

  return (
    <span
      className={`${variantClass} ${className}`}
      style={combinedStyle}
      aria-hidden="true"
      {...props}
    >
      {name}
    </span>
  );
}

