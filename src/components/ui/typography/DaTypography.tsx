/**
 * DaTypography.tsx
 * ─────────────────────────────────────────────────────────────
 * High-level typography component. Picks a named variant from
 * DaTypoVariants and renders it through DaText.
 *
 * Usage
 * ─────
 *   // Named variant, default tag & color
 *   <DaTypography variant="headlineMd">Our Mission</DaTypography>
 *
 *   // Override the HTML tag (e.g. h1 rendered as div for SEO)
 *   <DaTypography variant="displayLg" tag="div">Hero</DaTypography>
 *
 *   // Override color only
 *   <DaTypography variant="bodyMd" color="secondary">
 *     Supporting copy lives here.
 *   </DaTypography>
 *
 *   // Pass-through className for one-off spacing / layout
 *   <DaTypography variant="labelSm" className="mt-1">
 *     Field helper text
 *   </DaTypography>
 *
 * Rules
 * ─────
 * • Never bypass this component to write raw Tailwind text
 *   classes in product code — always use a named variant.
 * • If no variant fits, add one to DaTypoVariants rather than
 *   reaching down to DaText directly.
 * • Color overrides are intentional — use sparingly. Prefer
 *   letting the variant define the color.
 * ─────────────────────────────────────────────────────────────
 */

import { DaTypoVariants, type TypoVariant } from "./DaTypoVariants";
import DaText, { type Tag, type TextColor } from "./DaText";

// ─── Props ────────────────────────────────────────────────────

type DaTypographyProps = {
  /** Named variant from the design system. Default: bodyMd. */
  variant?:   TypoVariant;

  /** Override the HTML element without changing visual style. */
  tag?:       Tag;

  /** Override the variant's default color role. */
  color?:     TextColor;

  /** Additional Tailwind classes (layout, spacing, etc.). */
  className?: string;

  children:   React.ReactNode;
} & Omit<
  React.ComponentPropsWithoutRef<typeof DaText>,
  "size" | "weight" | "leading" | "font" | "tag"
>;

// ─── Component ────────────────────────────────────────────────

export default function DaTypography({
  variant   = "bodyMd",
  tag,
  color,
  className,
  children,
  ...props
}: DaTypographyProps) {
  const v = DaTypoVariants[variant];

  return (
    <DaText
      tag={tag ?? v.tag}
      size={v.size}
      weight={v.weight}
      leading={v.leading}
      font={v.font}
      color={color ?? v.color}
      className={className}
      {...props}
    >
      {children}
    </DaText>
  );
}