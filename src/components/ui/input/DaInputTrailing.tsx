/**
 * DaInputTrailing.tsx
 * ─────────────────────────────────────────────────────────────
 * Trailing action slot rendered at the right edge of the
 * field shell (inside the border, before any suffix adornment).
 *
 * Renders in priority order:
 *  1. Loading spinner   (replaces everything else while loading)
 *  2. Clear button      (shown when clearable + onClear set)
 *  3. Status icon       (error / success / warning indicator)
 *
 * Extracted from DaInputBase to keep the shell JSX clean.
 * ─────────────────────────────────────────────────────────────
 */

import clsx from "clsx"
import type { InputSize, InputStatus } from "./DaInput.types"
import { statusStyles, iconSizeMap } from "./DaInput.styles"
import DaIcon from "../icon/DaIcon"

type Props = {
  size:       InputSize
  status:     InputStatus
  loading?:   boolean
  clearable?: boolean
  onClear?:   () => void
  multiline?: boolean
}

export function DaInputTrailing({
  size,
  status,
  loading,
  clearable,
  onClear,
  multiline,
}: Props) {
  const { iconName } = statusStyles[status]
  const iconSize     = iconSizeMap[size]

  const showClear   = !loading && clearable && onClear
  const showStatus  = !loading && iconName !== null
  const hasContent  = loading || showClear || showStatus

  if (!hasContent) return null

  return (
    <div
      className={clsx(
        "flex items-center shrink-0 gap-1",
        multiline ? "px-3 py-3 self-start" : "pr-3",
      )}
    >

      {/* ── Loading spinner ───────────────────────────────── */}
      {loading && (
        <DaIcon
          name="loader"
          size={iconSize}
          aria-label="Loading"
          className="text-text-tertiary animate-spin"
        />
      )}

      {/* ── Clear button ──────────────────────────────────── */}
      {showClear && (
        <button
          type="button"
          onClick={onClear}
          tabIndex={-1}
          aria-label="Clear input"
          className={clsx(
            "flex items-center justify-center rounded-full",
            "w-5 h-5 text-text-tertiary",
            "hover:text-text-primary hover:bg-[var(--color-bg-raised)]",
            "transition-colors duration-100",
            "focus-visible:ring-2 ring-ring outline-none",
          )}
        >
          <DaIcon name="x" size={12} />
        </button>
      )}

      {/* ── Status icon ───────────────────────────────────── */}
      {showStatus && (
        <DaIcon
          name={iconName!}
          size={iconSize}
          className={statusStyles[status].textColor}
          aria-hidden="true"
        />
      )}

    </div>
  )
}
