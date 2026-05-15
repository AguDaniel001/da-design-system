/**
 * DaButton.styles.ts
 * ─────────────────────────────────────────────────────────────
 * All static style maps for the button component.
 * Consumed by DaButton — never imported directly in product code.
 * ─────────────────────────────────────────────────────────────
 */

// ─── Size ─────────────────────────────────────────────────────

/**
 * Height, horizontal padding, font size, gap, and min-width per size.
 * Radius uses structural tokens from _structure.css.
 *
 * Icon sizes are paired in iconSizeMap — keep in sync.
 *
 *  sm → h-8  / 14px  (compact toolbars, dense tables)
 *  md → h-10 / 14px  (default — forms, CTAs)
 *  lg → h-12 / 16px  (hero sections, primary page actions)
 */
export const sizeStyles = {
  sm: "h-8  px-3 text-sm   gap-1.5 min-w-[100px] rounded-[var(--radius-sm)]",
  md: "h-10 px-4 text-sm   gap-2   min-w-[140px] rounded-[var(--radius-md)]",
  lg: "h-12 px-5 text-base gap-2.5 min-w-[160px] rounded-[var(--radius-md)]",
} as const

/**
 * Square dimensions for icon-only buttons.
 * Drops padding and min-width — width equals height.
 */
export const iconOnlySizeStyles = {
  sm: "h-8  w-8  p-0 min-w-0 rounded-[var(--radius-sm)]",
  md: "h-10 w-10 p-0 min-w-0 rounded-[var(--radius-md)]",
  lg: "h-12 w-12 p-0 min-w-0 rounded-[var(--radius-md)]",
} as const

/**
 * Auto-pairs icon pixel size with button size.
 * Mirrors the icon size scale in DaIcon.config.ts.
 */
export const iconSizeMap = {
  sm: 14,
  md: 16,
  lg: 20,
} as const

// ─── Variant ──────────────────────────────────────────────────

/**
 * Each variant uses semantic CSS tokens so dark mode overrides
 * in _dark.css propagate automatically — no dark: prefix needed.
 *
 *  primary   → filled brand CTA
 *  secondary → surface-level, lower hierarchy
 *  outline   → branded border, transparent fill
 *  ghost     → no border, no fill — toolbar weight
 *  danger    → destructive red tint
 */
export const variantStyles = {
  primary: [
    "bg-primary text-primary-foreground",
    "border border-primary",
    "hover:bg-primary-hover",
    "active:bg-primary-active",
  ].join(" "),

  secondary: [
    "bg-secondary text-secondary-foreground",
    "border border-border",
    "hover:bg-raised",
    "active:opacity-80",
  ].join(" "),

  outline: [
    "bg-transparent text-primary",
    "border border-primary",
    "hover:bg-primary-muted",
    "active:bg-primary-subtle",
  ].join(" "),

  ghost: [
    "bg-transparent text-secondary-foreground",
    "border border-transparent",
    "hover:bg-secondary",
    "active:bg-muted",
  ].join(" "),

  danger: [
    "bg-red-500/10 text-red-500",
    "border border-red-500/30",
    "hover:bg-red-500/20",
    "active:bg-red-500/30",
  ].join(" "),
} as const

// ─── State ────────────────────────────────────────────────────

export const stateStyles = {
  disabled: "opacity-50 pointer-events-none cursor-not-allowed",
  loading:  "pointer-events-none cursor-wait",
} as const

// ─── Base ─────────────────────────────────────────────────────

/** Invariant classes applied to every button. */
export const baseStyles = [
  "inline-flex items-center justify-center",
  "font-medium leading-none",
  "border",
  "cursor-pointer",
  "transition-all duration-150 ease-in-out",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  "select-none whitespace-nowrap",
].join(" ")

// ─── Types ────────────────────────────────────────────────────

export type ButtonSize    = keyof typeof sizeStyles
export type ButtonVariant = keyof typeof variantStyles
