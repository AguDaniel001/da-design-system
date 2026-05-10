import * as React from "react"

// ─── Enumerations ─────────────────────────────────────────────

/**
 * Visual variant — controls border/fill treatment.
 *
 *  outlined  → border only, transparent bg           (default)
 *  filled    → solid background, no visible border   (subtle forms)
 *  ghost     → no border, no bg — just the field     (inline edits)
 */
export type InputVariant = "outlined" | "filled" | "ghost"

/**
 * Size variant — controls padding, height, and font size.
 * Maps to the DaText size scale.
 *
 *  sm  → h-8  (32px)  compact tables, dense toolbars
 *  md  → h-11 (44px)  default for most forms
 *  lg  → h-14 (56px)  hero / marketing forms
 */
export type InputSize = "sm" | "md" | "lg"

/** Status state — controls border colour and helper text colour. */
export type InputStatus = "default" | "error" | "success" | "warning"

/** Label alignment within its flex row. */
export type LabelAlign = "left" | "right"


// ─── Slot Types ───────────────────────────────────────────────

/**
 * Adornment — a non-interactive decoration attached to the
 * leading or trailing edge of the input field.
 *
 * Differs from icons in two ways:
 *  1. Can be a text string (e.g. "$", "kg", "https://")
 *  2. Occupies a visually separated slot with its own bg tint
 *
 * Usage: prefix="$"  or  suffix="kg"
 */
export type InputAdornment = React.ReactNode | string


// ─── Base Props (shared by DaInput + DaTextarea) ──────────────

export type BaseDaInputProps = {

  // ── Labelling ──────────────────────────────────────────────
  /** Visible label rendered above the field. */
  label?: string
  /** Aligns the label row. Default: "left". */
  labelAlign?: LabelAlign
  /** Renders a helper sentence below the field. Hidden when error is set. */
  helperText?: string

  // ── Validation states ──────────────────────────────────────
  /** Error message. When set, puts the field into error state. */
  error?: string
  /** Success message. When set, puts the field into success state. */
  success?: string
  /** Warning message. When set, puts the field into warning state. */
  warning?: string

  // ── Icon / adornment slots ─────────────────────────────────
  /**
   * Leading icon — rendered inside the field, before the input.
   * Best for semantic icons (search, lock, user…).
   */
  prefixIcon?: React.ReactNode
  /**
   * Trailing icon — rendered inside the field, after the input.
   * Overridden by the password toggle when type="password".
   */
  suffixIcon?: React.ReactNode
  /**
   * Leading adornment text or node (e.g. "$", "https://").
   * Rendered in a visually separated pill on the left edge.
   */
  prefix?: InputAdornment
  /**
   * Trailing adornment text or node (e.g. "kg", ".com").
   * Rendered in a visually separated pill on the right edge.
   */
  suffix?: InputAdornment

  // ── Visual configuration ───────────────────────────────────
  /** Visual style variant. Default: "outlined". */
  variant?: InputVariant
  /** Size variant. Default: "md". */
  size?: InputSize
  /** Controlled status override. Derived from error/success/warning when absent. */
  status?: InputStatus

  // ── Behaviour ──────────────────────────────────────────────
  /** Shows a ✕ button to clear the input. */
  clearable?: boolean
  /** Callback fired when the clear button is clicked. */
  onClear?: () => void
  /** Puts the field into a loading state — shows a spinner in the suffix slot. */
  loading?: boolean

  // ── Character count ────────────────────────────────────────
  /**
   * When set, renders a live character count below the field.
   * Should match the `maxLength` attribute on the native element.
   * Pass `maxLength` on the native props to show "n / max" format.
   */
  showCount?: boolean
  /** Current character count (controlled). Falls back to value.length. */
  count?: number

  // ── Class overrides ────────────────────────────────────────
  /** Extra classes on the outermost wrapper div. */
  containerClassName?: string
  /** Extra classes applied directly to the native input / textarea element. */
  inputClassName?: string
}
