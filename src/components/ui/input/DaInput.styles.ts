/**
 * DaInput.styles.ts
 * ─────────────────────────────────────────────────────────────
 * All static style maps for the input system.
 * Consumed by DaInputBase — never imported directly in
 * product code.
 *
 * Separated so DaInputBase stays a pure layout shell and
 * these maps stay easy to audit / extend without scrolling
 * past JSX.
 *
 * Contents
 * ────────
 *  sizeStyles         → height / padding / font per size
 *  textareaSizeStyles → padding-only scale for multiline
 *  variantStyles      → border + background Tailwind classes
 *  statusStyles       → border override + text colour per status
 *
 * Status icons are NOT defined here — they are rendered by
 * DaInputBase via <DaIcon> so they stay in JSX context.
 * ─────────────────────────────────────────────────────────────
 */

import type { InputSize, InputStatus, InputVariant } from "./DaInput.types"

// ─── Size ─────────────────────────────────────────────────────

/**
 * Height, horizontal padding, and font size per size variant.
 * `wrapper` applies to the inner flex row inside the shell.
 * `adornment` applies to the prefix / suffix pill spans.
 */
export const sizeStyles: Record<
  InputSize,
  { wrapper: string; fontSize: string; adornment: string }
> = {
  sm: {
    wrapper:   "h-8 px-3",
    fontSize:  "text-sm",       // 14px
    adornment: "text-xs px-2",
  },
  md: {
    wrapper:   "h-11 px-3",
    fontSize:  "text-sm",       // 14px — standard form input
    adornment: "text-sm px-3",
  },
  lg: {
    wrapper:   "h-14 px-4",
    fontSize:  "text-base",     // 16px
    adornment: "text-sm px-3",
  },
}

/**
 * Padding-only scale for textarea.
 * No height — controlled by `rows` prop and resize behaviour.
 */
export const textareaSizeStyles: Record<InputSize, string> = {
  sm: "px-3 py-2",
  md: "px-3 py-3",
  lg: "px-4 py-3",
}

// ─── Icon size ────────────────────────────────────────────────

/**
 * Maps each size to the numeric pixel value passed to <DaIcon>.
 * Kept here so DaInput and DaTextarea both reference one source.
 */
export const iconSizeMap: Record<InputSize, number> = {
  sm: 14,
  md: 16,
  lg: 20,
}

// ─── Variant ──────────────────────────────────────────────────

/**
 * Tailwind class arrays per variant.
 * Spread into clsx() — array form keeps each concern on its
 * own line and avoids a single unreadable string.
 *
 * Colour values intentionally reference CSS tokens via
 * Tailwind's arbitrary value syntax so dark-mode overrides
 * in _dark.css work automatically.
 */
export const variantStyles: Record<InputVariant, string[]> = {
  outlined: [
    "border border-input",
    "bg-input-background",
    "focus-within:border-ring",
    "focus-within:bg-transparent",
    "hover:border-[var(--color-input-border-hover)]",
  ],
  filled: [
    "border border-transparent",
    "bg-input-filled",
    "focus-within:border-ring",
    "hover:bg-[var(--color-bg-raised)]",
  ],
  ghost: [
    "border border-transparent",
    "bg-transparent",
    "focus-within:border-ring",
    "focus-within:bg-input-filled",
  ],
}

// ─── Status ───────────────────────────────────────────────────

/**
 * Per-status:
 *  border    → overrides the variant border on the shell
 *  textColor → applied to the feedback message below the field
 *  iconName  → DaIcon name rendered in the trailing slot
 *
 * Icon size is always driven by the field's `size` prop —
 * use `iconSizeMap[size]` when rendering.
 */
export const statusStyles: Record<
  InputStatus,
  { border: string; textColor: string; iconName: string | null }
> = {
  default: {
    border:    "",
    textColor: "text-text-tertiary",
    iconName:  null,
  },
  error: {
    border:    [
      "border-[var(--color-input-border-error)]",
      "hover:border-[var(--color-input-border-error)]",
      "focus-within:border-[var(--color-input-border-error)]",
    ].join(" "),
    textColor: "text-red-500",
    iconName:  "alert-circle",
  },
  success: {
    border:    [
      "border-[var(--color-border-success)]",
      "hover:border-[var(--color-border-success)]",
      "focus-within:border-[var(--color-border-success)]",
    ].join(" "),
    textColor: "text-green-600",
    iconName:  "check-circle",
  },
  warning: {
    border:    [
      "border-[var(--color-border-warning)]",
      "hover:border-[var(--color-border-warning)]",
      "focus-within:border-[var(--color-border-warning)]",
    ].join(" "),
    textColor: "text-yellow-500",
    iconName:  "alert-triangle",
  },
}
