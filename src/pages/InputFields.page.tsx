import React from "react"
import { DaInput } from "../components/ui/input/DaInput"
import { DaTextarea } from "../components/ui/input/DaTextarea"
import DaTypography from "../components/ui/typography/DaTypography"
import DaIcon from "../components/ui/icon/DaIcon"

export default function InputFieldsPage() {
  const [value, setValue] = React.useState("")

  return (
    <div className="px-5 pb-24 pt-30 bg-background smooth-transition min-h-screen">
      <div className="max-w-4xl mx-auto space-y-16">

      
      <header className="space-y-4">
        <DaTypography variant="displayLg">Input Fields</DaTypography>
        <DaTypography variant="titleMd" color="secondary">
          Flexible, accessible input components with support for labels, icons, adornments, and validation states.
        </DaTypography>
      </header>

      {/* ── Basic Inputs ────────────────────────────────────────── */}
      <section className="space-y-6">
        <DaTypography variant="titleLg">Basic Usage</DaTypography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DaInput
            label="Default Input"
            placeholder="Type something..."
            helperText="This is a standard helper text."
          />
          <DaInput
            label="Required Input"
            placeholder="Email address"
            required
            type="email"
          />
          <DaInput
            label="Disabled Input"
            placeholder="Cannot type here"
            disabled
            defaultValue="Locked value"
          />
          <DaInput
            label="Read-only Input"
            placeholder="Only for viewing"
            readOnly
            defaultValue="I am read-only"
          />
        </div>
      </section>

      {/* ── Variants & Sizes ─────────────────────────────────────── */}
      <section className="space-y-6">
        <DaTypography variant="titleLg">Variants & Sizes</DaTypography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          <DaInput
            label="Small (sm)"
            size="sm"
            placeholder="Compact input"
          />
          <DaInput
            label="Medium (md)"
            size="md"
            placeholder="Default size"
          />
          <DaInput
            label="Large (lg)"
            size="lg"
            placeholder="Hero size"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <DaInput
            label="Outlined (Default)"
            variant="outlined"
            placeholder="Outlined style"
          />
          <DaInput
            label="Filled"
            variant="filled"
            placeholder="Filled style"
          />
          <DaInput
            label="Ghost"
            variant="ghost"
            placeholder="Ghost style"
          />
        </div>
      </section>

      {/* ── Icons & Adornments ───────────────────────────────────── */}
      <section className="space-y-6">
        <DaTypography variant="titleLg">Icons & Adornments</DaTypography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DaInput
            label="Leading Icon"
            prefixIcon={<DaIcon name="search" size={20} />}
            placeholder="Search..."
          />
          <DaInput
            label="Password Toggle"
            type="password"
            placeholder="Enter password"
          />
          <DaInput
            label="URL Prefix"
            prefix="https://"
            placeholder="example.com"
          />
          <DaInput
            label="Weight Suffix"
            suffix="kg"
            placeholder="0.00"
            type="number"
          />
          <DaInput
            label="Clearable Input"
            clearable
            placeholder="Type and then clear"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onClear={() => setValue("")}
          />
          <DaInput
            label="Loading State"
            loading
            placeholder="Wait for it..."
          />
        </div>
      </section>

      {/* ── Validation States ────────────────────────────────────── */}
      <section className="space-y-6">
        <DaTypography variant="titleLg">Validation States</DaTypography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <DaInput
            label="Error State"
            error="Please enter a valid email address."
            defaultValue="invalid-email"
          />
          <DaInput
            label="Success State"
            success="Username is available!"
            defaultValue="valid username"
          />
          <DaInput
            label="Warning State"
            warning="Password is a bit weak."
            defaultValue="123456"
          />
        </div>
      </section>

      {/* ── Textareas ───────────────────────────────────────────── */}
      <section className="space-y-6">
        <DaTypography variant="titleLg">Textareas</DaTypography>
        <div className="grid grid-cols-1 gap-8">
          <DaTextarea
            label="Basic Textarea"
            placeholder="Tell us your story..."
            rows={4}
          />
          <DaTextarea
            label="With Character Count"
            placeholder="Max 200 characters"
            showCount
            maxLength={200}
            rows={4}
          />
        </div>
      </section>
      </div>
    </div>
  )
}
