/**
 * DaInputBase.tsx
 * ─────────────────────────────────────────────────────────────
 * Layout shell shared by DaInput and DaTextarea.
 * Composes sub-components — owns no style logic itself.
 *
 * Render tree
 * ───────────
 *  <div>                        ← outer wrapper (containerClassName)
 *    <DaInputLabel />           ← label + required star
 *    <div>                      ← field shell (variant / status border)
 *      <DaInputAdornment side="left" />   ← prefix pill  (optional)
 *      <div>                    ← inner flex row
 *        {children}             ← prefixIcon + native element + suffixIcon
 *                                  composed by DaInput / DaTextarea
 *      </div>
 *      <DaInputTrailing />      ← loading / clear / status icon
 *      <DaInputAdornment side="right" />  ← suffix pill  (optional)
 *    </div>
 *    <DaInputFeedback />        ← message + character count
 *  </div>
 *
 * Sub-components
 * ──────────────
 *  DaInputLabel      → DaInputLabel.tsx
 *  DaInputAdornment  → DaInputAdornment.tsx
 *  DaInputTrailing   → DaInputTrailing.tsx
 *  DaInputFeedback   → DaInputFeedback.tsx
 *  Style maps        → DaInput.styles.ts
 * ─────────────────────────────────────────────────────────────
 */

import * as React from "react"
import { cn } from "../../../utils/cn"
import type { BaseDaInputProps, InputStatus } from "./DaInput.types"
import { variantStyles, statusStyles, sizeStyles, textareaSizeStyles } from "./DaInput.styles"
import { DaInputLabel }     from "./DaInputLabel"
import { DaInputAdornment } from "./DaInputAdornment"
import { DaInputTrailing }  from "./DaInputTrailing"
import { DaInputFeedback }  from "./DaInputFeedback"
import clsx from "clsx"

// ─── Props ────────────────────────────────────────────────────

type Props = BaseDaInputProps & {
  id?:          string
  required?:    boolean
  disabled?:    boolean
  readOnly?:    boolean
  multiline?:   boolean
  valueLength?: number
  children:     React.ReactNode
}

// ─── Component ────────────────────────────────────────────────

export function DaInputBase({
  label,
  labelAlign    = "left",
  helperText,
  error,
  success,
  warning,
  prefix,
  suffix,
  variant       = "outlined",
  size          = "md",
  status:       statusProp,
  clearable,
  onClear,
  loading,
  showCount,
  count,
  containerClassName,
  required,
  disabled,
  readOnly,
  multiline,
  valueLength,
  children,
  id,
}: Props) {
  const inputId = id ?? React.useId()

  // Derive status — explicit prop wins, then infer from message props
  const status: InputStatus =
    statusProp ??
    (error   ? "error"   :
     success ? "success" :
     warning ? "warning" : "default")

  // Single feedback message — priority: error > success > warning > helper
  const feedbackMsg = error ?? success ?? warning ?? helperText

  // aria-describedby IDs
  const descIds: string[] = []
  if (feedbackMsg) descIds.push(`${inputId}-desc`)
  if (showCount)   descIds.push(`${inputId}-count`)

  return (
    <div className={cn("flex flex-col gap-1", containerClassName)}>

      {label && (
        <DaInputLabel
          inputId={inputId}
          label={label}
          required={required}
          labelAlign={labelAlign}
        />
      )}

      {/* ── Field shell ──────────────────────────────────── */}
      <div
        className={cn(
          "relative flex items-stretch rounded-sm overflow-hidden",
          "transition-[border-color,background-color] duration-150",
          variantStyles[variant],
          status !== "default" && statusStyles[status].border,
          disabled && "opacity-50 cursor-not-allowed pointer-events-none",
          readOnly && "cursor-default select-none",
        )}
        aria-describedby={descIds.join(" ") || undefined}
      >

        {prefix != null && (
          <DaInputAdornment side="left" size={size}>
            {prefix}
          </DaInputAdornment>
        )}

        {/* Inner row — children come from DaInput / DaTextarea */}
        <div
          className={clsx(
            "flex flex-1 items-center",
            multiline
              ? textareaSizeStyles[size]
              : clsx(sizeStyles[size].wrapper, "gap-2"),
          )}
        >
          {children}
        </div>

        <DaInputTrailing
          size={size}
          status={status}
          loading={loading}
          clearable={clearable}
          onClear={onClear}
          multiline={multiline}
        />

        {suffix != null && (
          <DaInputAdornment side="right" size={size}>
            {suffix}
          </DaInputAdornment>
        )}

      </div>

      <DaInputFeedback
        inputId={inputId}
        status={status}
        feedbackMsg={feedbackMsg}
        showCount={showCount}
        count={count}
        valueLength={valueLength}
      />

    </div>
  )
}
