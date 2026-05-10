/**
 * DaInputFeedback.tsx
 * ─────────────────────────────────────────────────────────────
 * Bottom row rendered below the field shell.
 * Shows the feedback message (error / success / warning /
 * helper) on the left and a live character count on the right.
 *
 * Extracted from DaInputBase so the feedback logic can be
 * read, tested, and extended in isolation.
 * ─────────────────────────────────────────────────────────────
 */

import clsx from "clsx"
import type { InputStatus } from "./DaInput.types"
import { statusStyles } from "./DaInput.styles"

type Props = {
  inputId:      string
  status:       InputStatus
  feedbackMsg?: string

  showCount?:   boolean
  count?:       number
  valueLength?: number
}

export function DaInputFeedback({
  inputId,
  status,
  feedbackMsg,
  showCount,
  count,
  valueLength = 0,
}: Props) {
  const hasAnything = feedbackMsg || showCount
  if (!hasAnything) return null

  const { textColor } = statusStyles[status]

  // Character count colour escalation
  const atLimit   = typeof count === "number" && valueLength >= count
  const nearLimit = typeof count === "number" && valueLength >= count * 0.9

  return (
    <div className="flex items-start justify-between gap-2">

      {feedbackMsg && (
        <p
          id={`${inputId}-desc`}
          role={status === "error" ? "alert" : undefined}
          className={clsx(
            "text-xs leading-normal flex items-center gap-1",
            textColor,
          )}
        >
          {feedbackMsg}
        </p>
      )}

      {showCount && (
        <p
          id={`${inputId}-count`}
          aria-live="polite"
          className={clsx(
            "text-xs tabular-nums shrink-0 ml-auto",
            atLimit   ? "text-red-500"    :
            nearLimit ? "text-yellow-500" :
                        "text-text-tertiary",
          )}
        >
          {valueLength}
          {typeof count === "number" ? ` / ${count}` : ""}
        </p>
      )}

    </div>
  )
}
