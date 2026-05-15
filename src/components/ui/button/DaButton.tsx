/**
 * DaButton.tsx
 * ─────────────────────────────────────────────────────────────
 * Design-system button component.
 *
 * Usage
 * ─────
 *   // Default
 *   <DaButton>Save changes</DaButton>
 *
 *   // Prefix / suffix icons
 *   <DaButton prefixIcon="add" suffixIcon="chevron-right">
 *     New item
 *   </DaButton>
 *
 *   // Icon-only (label required for a11y)
 *   <DaButton iconOnly icon="search" label="Search" />
 *
 *   // Link button
 *   <DaButton to="/dashboard">Go to dashboard</DaButton>
 *
 *   // Loading / disabled
 *   <DaButton loading>Saving…</DaButton>
 *   <DaButton disabled>Unavailable</DaButton>
 *
 * Files
 * ─────
 *   DaButton.tsx         → component (this file)
 *   DaButton.styles.ts   → size, variant, state style maps
 *   DaButton.types.ts    → DaButtonProps, ButtonSize, ButtonVariant
 * ─────────────────────────────────────────────────────────────
 */

import clsx from "clsx"
import React from "react"
import { Link } from "@tanstack/react-router"
import {
  baseStyles,
  sizeStyles,
  iconOnlySizeStyles,
  variantStyles,
  stateStyles,
  iconSizeMap,
} from "./DaButton.styles"
import type { DaButtonProps } from "./DaButton.types"
import DaIcon from "../icon/DaIcon"

export type { DaButtonProps } from "./DaButton.types"
export type { ButtonSize, ButtonVariant } from "./DaButton.styles"

// ─── Component ────────────────────────────────────────────────

export default function DaButton({
  to,
  hash,
  link      = true,
  type      = "button",
  size      = "md",
  variant   = "primary",
  disabled  = false,
  loading   = false,
  className,
  onClick,
  ...rest
}: DaButtonProps) {
  const isDisabled = disabled || loading
  const px = iconSizeMap[size]

  // ── Inner content ────────────────────────────────────────────

  let content: React.ReactNode

  if (rest.iconOnly) {
    content = loading
      ? <SpinnerIcon size={px} />
      : <DaIcon name={rest.icon} size={px} label={rest.label} />
  } else {
    const { prefixIcon, suffixIcon, children } = rest
    content = (
      <>
        {loading
          ? <SpinnerIcon size={px} />
          : prefixIcon && <DaIcon name={prefixIcon} size={px} aria-hidden />
        }
        {children}
        {!loading && suffixIcon && (
          <DaIcon name={suffixIcon} size={px} aria-hidden />
        )}
      </>
    )
  }

  // ── Button element ───────────────────────────────────────────

  const button = (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      aria-label={rest.iconOnly ? rest.label : undefined}
      className={clsx(
  baseStyles,
  rest.iconOnly
    ? iconOnlySizeStyles[size]
    : sizeStyles[size],
  variantStyles[variant],
  isDisabled && stateStyles.disabled,
  loading && !disabled && stateStyles.loading,
  className,
)}
    >
      {content}
    </button>
  )

  // ── Link wrapper ─────────────────────────────────────────────

  if (link && to && !isDisabled) {
    return (
      <Link to={to} hash={hash} className="inline-block">
        {button}
      </Link>
    )
  }

  return button
}

// ─── Spinner ──────────────────────────────────────────────────

function SpinnerIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="animate-spin shrink-0"
    >
      <circle
        cx="8" cy="8" r="6"
        stroke="currentColor"
        strokeWidth="2"
        className="opacity-25"
      />
      <path
        d="M14 8a6 6 0 0 1-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
