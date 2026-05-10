/**
 * DaInput.tsx
 * ─────────────────────────────────────────────────────────────
 * Single-line text input. Built on DaInputBase.
 *
 * Supported types: text | email | password | number |
 *                  search | tel | url
 *
 * Icon slots (prefixIcon / suffixIcon) accept any ReactNode.
 * Pass <DaIcon name="..." size={...} /> for design-system icons.
 *
 * Password toggle uses DaIcon "eye" / "eye-off".
 * ─────────────────────────────────────────────────────────────
 */

import * as React from "react"
import clsx from "clsx"
import { DaInputBase } from "./DaInputBase"
import { iconSizeMap } from "./DaInput.styles"
import type { BaseDaInputProps } from "./DaInput.types"
import DaIcon from "../icon/DaIcon"

// ─── Props ────────────────────────────────────────────────────

export type DaInputProps =
  BaseDaInputProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size" | "prefix"> & {
    type?: "text" | "email" | "password" | "number" | "search" | "tel" | "url"
  }

// ─── Component ────────────────────────────────────────────────

export const DaInput = React.forwardRef<HTMLInputElement, DaInputProps>(
  (
    {
      type = "text",
      prefixIcon,
      suffixIcon,
      prefix,
      suffix,
      variant  = "outlined",
      size     = "md",
      status,
      label,
      labelAlign,
      helperText,
      error,
      success,
      warning,
      clearable,
      onClear,
      loading,
      showCount,
      count,
      containerClassName,
      inputClassName,
      disabled,
      required,
      readOnly,
      maxLength,
      value,
      defaultValue,
      id,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false)
    const [internalValue, setInternalValue] = React.useState(defaultValue ?? "")

    const isPassword   = type === "password"
    const resolvedType = isPassword && showPassword ? "text" : type
    const iconSize     = iconSizeMap[size]

    const currentValue = value !== undefined ? String(value) : String(internalValue)
    const valueLength  = currentValue.length

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (value === undefined) setInternalValue(e.target.value)
      props.onChange?.(e)
    }

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
        clearable={clearable}
        onClear={onClear}
        loading={loading}
        showCount={showCount}
        count={count ?? maxLength}
        containerClassName={containerClassName}
        disabled={disabled}
        required={required}
        readOnly={readOnly}
        id={id}
        valueLength={valueLength}
      >
        {/* Leading icon */}
        {prefixIcon && (
          <span aria-hidden="true" className="shrink-0 text-text-tertiary flex items-center">
            {prefixIcon}
          </span>
        )}

        {/* Native input */}
        <input
          ref={ref}
          id={id}
          type={resolvedType}
          disabled={disabled}
          required={required}
          readOnly={readOnly}
          maxLength={maxLength}
          value={value}
          defaultValue={value === undefined ? defaultValue : undefined}
          onChange={handleChange}
          aria-invalid={!!error}
          className={clsx(
            "flex-1 min-w-0 bg-transparent outline-none",
            "text-input-text placeholder:text-input-placeholder",
            "disabled:cursor-not-allowed read-only:cursor-default",
            size === "lg" ? "text-base" : "text-sm",
            inputClassName,
          )}
          {...props}
        />

        {/* Password toggle */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(p => !p)}
            tabIndex={-1}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className={clsx(
              "shrink-0 flex items-center text-text-tertiary",
              "hover:text-text-primary transition-colors duration-100",
              "focus-visible:ring-2 ring-ring rounded-sm outline-none",
            )}
          >
            <DaIcon
              name={showPassword ? "eye-off" : "eye"}
              size={iconSize}
            />
          </button>
        )}

        {/* Trailing icon — hidden during loading (DaInputTrailing owns that slot) */}
        {!isPassword && suffixIcon && !loading && (
          <span aria-hidden="true" className="shrink-0 text-text-tertiary flex items-center">
            {suffixIcon}
          </span>
        )}
      </DaInputBase>
    )
  }
)

DaInput.displayName = "DaInput"
