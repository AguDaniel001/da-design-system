import DaButton from "../components/ui/button/DaButton";
import DaTypography from "../components/ui/typography/DaTypography";

export default function ButtonsPage() {
  return (
    <div className="px-5 pb-24 pt-30 bg-background smooth-transition min-h-screen">
      <div className="max-w-4xl mx-auto space-y-16">
      <header className="space-y-4">
        <DaTypography variant="displayLg">Buttons</DaTypography>
        <DaTypography variant="titleMd" color="secondary">
          Versatile button components for actions, navigation, and state-driven interactions.
        </DaTypography>
      </header>

      {/* ── Visual Variants ─────────────────────────────────────── */}
      <section className="space-y-6">
        <DaTypography variant="titleLg">Visual Variants</DaTypography>
        <div className="flex flex-wrap gap-4">
          <DaButton variant="primary">Primary</DaButton>
          <DaButton variant="secondary">Secondary</DaButton>
          <DaButton variant="outline">Outline</DaButton>
          <DaButton variant="ghost">Ghost</DaButton>
          <DaButton variant="danger">Danger</DaButton>
        </div>
      </section>

      {/* ── Sizes ──────────────────────────────────────────────── */}
      <section className="space-y-6">
        <DaTypography variant="titleLg">Sizes</DaTypography>
        <div className="flex flex-wrap items-end gap-6">
          <div className="space-y-2">
            <DaTypography variant="labelSm" color="tertiary">Small (sm)</DaTypography>
            <DaButton size="sm">Action</DaButton>
          </div>
          <div className="space-y-2">
            <DaTypography variant="labelSm" color="tertiary">Medium (md)</DaTypography>
            <DaButton size="md">Action</DaButton>
          </div>
          <div className="space-y-2">
            <DaTypography variant="labelSm" color="tertiary">Large (lg)</DaTypography>
            <DaButton size="lg">Action</DaButton>
          </div>
        </div>
      </section>

      {/* ── Icons & Composition ────────────────────────────────── */}
      <section className="space-y-6">
        <DaTypography variant="titleLg">Icons & Composition</DaTypography>
        <div className="flex flex-wrap gap-4">
          <DaButton prefixIcon="add">Leading Icon</DaButton>
          <DaButton suffixIcon="chevron-right">Trailing Icon</DaButton>
          <DaButton prefixIcon="cloud" suffixIcon="download">Both Icons</DaButton>
          <DaButton iconOnly icon="search" label="Search" />
          <DaButton iconOnly icon="notification" variant="secondary" label="Notifications" />
          <DaButton iconOnly icon="delete" variant="danger" label="Delete" />
        </div>
      </section>

      {/* ── States ─────────────────────────────────────────────── */}
      <section className="space-y-6">
        <DaTypography variant="titleLg">Interactive States</DaTypography>
        <div className="flex flex-wrap gap-4">
          <DaButton loading>Loading State</DaButton>
          <DaButton variant="secondary" loading>Secondary Loading</DaButton>
          <DaButton disabled>Disabled State</DaButton>
          <DaButton variant="outline" disabled>Outline Disabled</DaButton>
        </div>
      </section>

      {/* ── Routing & Navigation ───────────────────────────────── */}
      <section className="space-y-6">
        <DaTypography variant="titleLg">Routing</DaTypography>
        <div className="flex flex-wrap gap-4">
          <DaButton to="/" variant="secondary" prefixIcon="home">
            Go to Home
          </DaButton>
          <DaButton to="/input-fields" variant="outline" suffixIcon="chevron-right">
            Explore Inputs
          </DaButton>
        </div>
      </section>
      </div>
    </div>
  );
}
