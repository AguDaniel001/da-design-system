/**
 * DaButton.types.ts
 * ─────────────────────────────────────────────────────────────
 * Types for the DaButton component.
 * ─────────────────────────────────────────────────────────────
 */

import type React from "react"
import type { RouteTo } from "../../../routeTree"
import type { ButtonSize, ButtonVariant } from "./DaButton.styles"
import type { DaIconName } from "../icon/DaIcon.registry"

export type { RouteTo, ButtonSize, ButtonVariant }

// ─── Shared props ─────────────────────────────────────────────

type BaseButtonProps = {
  /** TanStack Router route — renders a <Link> wrapper when provided. */
  to?:        RouteTo
  hash?:      string

  /** Set false to suppress the Link wrapper even when `to` is set. */
  link?:      boolean

  type?:      "button" | "submit" | "reset"
  size?:      ButtonSize
  variant?:   ButtonVariant
  disabled?:  boolean
  loading?:   boolean
  className?: string
  onClick?:   (e: React.MouseEvent<HTMLButtonElement>) => void
}

// ─── Text button ──────────────────────────────────────────────

/** Standard button with optional prefix / suffix icons. */
export type TextButtonProps = BaseButtonProps & {
  iconOnly?:   false | undefined
  /** Icon rendered to the left of the label. */
  prefixIcon?: DaIconName
  /** Icon rendered to the right of the label. */
  suffixIcon?: DaIconName
  children:    React.ReactNode
  icon?:       never
  label?:      never
}

// ─── Icon-only button ─────────────────────────────────────────

/**
 * Icon-only button — no text children.
 * `label` is required for screen-reader accessibility.
 */
export type IconOnlyButtonProps = BaseButtonProps & {
  iconOnly:    true
  /** The single icon to display. */
  icon:        DaIconName
  /** Screen-reader label (required when iconOnly is true). */
  label:       string
  children?:   never
  prefixIcon?: never
  suffixIcon?: never
}

// ─── Union ────────────────────────────────────────────────────

export type DaButtonProps = TextButtonProps | IconOnlyButtonProps
