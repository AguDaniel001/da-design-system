/**
 * DaTextarea.tsx
 * ─────────────────────────────────────────────────────────────
 * Multi-line text input. Built on DaInputBase.
 *
 * Icon slots (prefixIcon / suffixIcon) accept any ReactNode.
 * Pass <DaIcon name="..." size={...} /> for design-system icons.
 * ─────────────────────────────────────────────────────────────
 */

import * as React from "react"
import clsx from "clsx"
import { DaInputBase } from "./DaInputBase"
import type { BaseDaInputProps } from "./DaInput.types"

// ─── Props ────────────────────────────────────────────────────

export type DaTextareaProps =
  BaseDaInputProps &
  Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "prefix"> & {
    /**
     * Auto-expands the textarea height as the user types.
     * When true, `resize` is overridden to `none`.
     * Default: false.
     */
    autoResize?: boolean
  }

// ─── Component ────────────────────────────────────────────────

export const DaTextarea = React.forwardRef<HTMLTextAreaElement, DaTextareaProps>(
  (
    {
      prefixIcon,
      suffixIcon,
      prefix,
      suffix,
      variant      = "outlined",
      size         = "md",
      status,
      label,
      labelAlign,
      helperText,
      error,
      success,
      warning,
      loading,
      showCount,
      count,
      containerClassName,
      autoResize   = false,
      rows         = 4,
      inputClassName,
      disabled,
      required,
      readOnly,
      maxLength,
      value,
      defaultValue,
      id,
      onChange,
      ...props
    },
    ref
  ) => {
    const internalRef = React.useRef<HTMLTextAreaElement>(null)
    const resolvedRef = (ref as React.RefObject<HTMLTextAreaElement>) ?? internalRef

    const [internalValue, setInternalValue] = React.useState(defaultValue ?? "")
    const currentValue  = value !== undefined ? String(value) : String(internalValue)
    const valueLength   = currentValue.length

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (value === undefined) setInternalValue(e.target.value)
      if (autoResize && resolvedRef.current) {
        const el = resolvedRef.current
        el.style.height = "auto"
        el.style.height = `${el.scrollHeight}px`
      }
      onChange?.(e)
    }

    React.useEffect(() => {
      if (autoResize && resolvedRef.current) {
        const el = resolvedRef.current
        el.style.height = "auto"
        el.style.height = `${el.scrollHeight}px`
      }
    }, [autoResize])

    return (
      <DaInputBase
        label={label}
        labelAlign={labelAlign}
        helperText={helperText}
        error={error}
        success={success}
        warning={warning}
        prefix={prefix}
        suffix={suffix}
        variant={variant}
        size={size}
        status={status}
        loading={loading}
        showCount={showCount}
        count={count ?? maxLength}
        containerClassName={containerClassName}
        disabled={disabled}
        required={required}
        readOnly={readOnly}
        id={id}
        multiline
        valueLength={valueLength}
      >
        {prefixIcon && (
          <span aria-hidden="true" className="shrink-0 text-text-tertiary flex items-center mt-0.5">
            {prefixIcon}
          </span>
        )}

        <textarea
          ref={resolvedRef}
          id={id}
          disabled={disabled}
          required={required}
          readOnly={readOnly}
          maxLength={maxLength}
          value={value}
          defaultValue={value === undefined ? defaultValue : undefined}
          rows={rows}
          onChange={handleChange}
          aria-invalid={!!error}
          className={clsx(
            "flex-1 min-w-0 w-full bg-transparent outline-none",
            "text-input-text placeholder:text-input-placeholder",
            size === "lg" ? "text-base" : "text-sm",
            "leading-normal",
            autoResize ? "resize-none" : "resize-y",
            "disabled:cursor-not-allowed read-only:cursor-default",
            inputClassName,
          )}
          {...props}
        />

        {suffixIcon && !loading && (
          <span aria-hidden="true" className="shrink-0 text-text-tertiary flex items-center mt-0.5">
            {suffixIcon}
          </span>
        )}
      </DaInputBase>
    )
  }
)

DaTextarea.displayName = "DaTextarea"
