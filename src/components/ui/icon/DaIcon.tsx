/**
 * DaIcon.tsx
 * ─────────────────────────────────────────────────────────────
 * Design-system icon component.
 *
 * Usage
 * ─────
 *   // Decorative (next to visible text — aria-hidden auto-applied)
 *   <DaIcon name="search" size="md" />
 *
 *   // Semantic (icon alone conveys meaning — provide label)
 *   <DaIcon name="delete" size="md" label="Delete item" />
 *
 *   // Named size
 *   <DaIcon name="notification" size="lg" />
 *
 *   // Raw pixel override
 *   <DaIcon name="chevron-right" size={18} />
 *
 *   // Colour via className (preferred — uses CSS tokens)
 *   <DaIcon name="alert-circle" className="text-red-500" />
 *
 *   // Stroke width for outline icons
 *   <DaIcon name="settings" strokeWidth={1.5} />
 *
 * Files
 * ─────
 *   DaIcon.types.ts    → DaIconProps, IconSize, IconSizeValue
 *   DaIcon.config.ts   → ICON_SIZE_MAP, ICON_FALLBACK_MODE
 *   DaIcon.registry.ts → ICON_MAP, DaIconName
 *   DaIcon.tsx         → component (this file)
 * ─────────────────────────────────────────────────────────────
 */

import { ICON_MAP, type DaIconName } from "./DaIcon.registry"
import { ICON_SIZE_MAP, ICON_FALLBACK_MODE } from "./DaIcon.config"
import type { DaIconProps } from "./DaIcon.types"

// ─── Helpers ──────────────────────────────────────────────────

/** Resolve a named size or raw number to pixels. */
function resolveSize(size: DaIconProps["size"]): number {
  if (size === undefined)         return ICON_SIZE_MAP.md
  if (typeof size === "number")   return size
  return ICON_SIZE_MAP[size] ?? ICON_SIZE_MAP.md
}

// ─── Component ────────────────────────────────────────────────

export function DaIcon({
  name,
  size    = "md",
  className,
  color,
  label,
  // strokeWidth,
  title,
}: DaIconProps) {
  const IconComponent = ICON_MAP[name as DaIconName]

  // ── Unknown name handling ──────────────────────────────────
  if (!IconComponent) {
    if (ICON_FALLBACK_MODE === "error") {
      throw new Error(
        `[DaIcon] Unknown icon name: "${name}". ` +
        `Add it to DaIcon.registry.ts or check for a typo.`
      )
    }
    if (ICON_FALLBACK_MODE === "warn") {
      console.warn(
        `[DaIcon] Unknown icon name: "${name}". ` +
        `Add it to DaIcon.registry.ts or check for a typo.`
      )
    }
    return null
  }

  const px = resolveSize(size)

  // ── Accessibility ──────────────────────────────────────────
  // Semantic icon (label provided) → aria-label, role="img"
  // Decorative icon (no label)     → aria-hidden="true"
  const a11y = label
    ? { role: "img" as const, "aria-label": label }
    : { "aria-hidden": true as const }

  return (
    <IconComponent
      size={px}
      className={className}
      color={color}
      // strokeWidth={strokeWidth}
      title={title}
      {...a11y}
    />
  )
}

// Re-export registry type so consumers don't need a second import
export type { DaIconName } from "./DaIcon.registry"

export default DaIcon
