/**
 * DaInputAdornment.tsx
 * ─────────────────────────────────────────────────────────────
 * Visually separated text pill attached to the leading or
 * trailing edge of the field shell.
 *
 * Examples: "$", "kg", "https://", ".com"
 *
 * Differs from an icon slot:
 *  • Has its own background tint (bg-sunken)
 *  • Separated by a border from the input area
 *  • Stretches the full height of the shell
 *
 * Extracted from DaInputBase to keep the shell JSX clean.
 * ─────────────────────────────────────────────────────────────
 */

import clsx from "clsx"
import type { InputAdornment, InputSize } from "./DaInput.types"
import { sizeStyles } from "./DaInput.styles"

type Props = {
  children: InputAdornment
  side:     "left" | "right"
  size:     InputSize
}

export function DaInputAdornment({ children, side, size }: Props) {
  const { adornment } = sizeStyles[size]

  return (
    <span
      aria-hidden="true"
      className={clsx(
        "flex items-center self-stretch shrink-0 select-none",
        "bg-[var(--color-bg-sunken)] text-text-tertiary",
        adornment,
        side === "left"
          ? "border-r border-input"
          : "border-l border-input",
      )}
    >
      {children}
    </span>
  )
}
