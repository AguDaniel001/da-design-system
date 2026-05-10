/**
 * DaInputLabel.tsx
 * ─────────────────────────────────────────────────────────────
 * Label row rendered above the field shell.
 * Handles alignment, required asterisk, and correct htmlFor
 * wiring to the native input.
 *
 * Extracted from DaInputBase so the label logic can be read,
 * tested, and extended in isolation.
 * ─────────────────────────────────────────────────────────────
 */

import clsx from "clsx"
import type { LabelAlign } from "./DaInput.types"
import DaTypography from "../typography/DaTypography"

type Props = {
  inputId:    string
  label:      string
  required?:  boolean
  labelAlign: LabelAlign
}

export function DaInputLabel({ inputId, label, required, labelAlign }: Props) {
  return (
    <div
      className={clsx(
        "flex items-center gap-1",
        labelAlign === "right" ? "justify-end" : "justify-start",
      )}
    >
      <DaTypography
        tag="label"
        variant="labelMd"
        htmlFor={inputId}
        color="primary"
      >
        {label}
      </DaTypography>

      {required && (
        <span aria-hidden="true" className="text-red-500 text-sm leading-none">
          *
        </span>
      )}
    </div>
  )
}
