import { useState } from "react"
import { ICON_MAP, type DaIconName } from "../components/ui/icon/DaIcon.registry"
import DaIcon from "../components/ui/icon/DaIcon"
import DaTypography from "../components/ui/typography/DaTypography"
import { DaInput } from "../components/ui/input/DaInput"

export default function IconsPage() {
  const [search, setSearch] = useState("")

  const iconNames = Object.keys(ICON_MAP) as DaIconName[]
  
  const filteredIcons = iconNames.filter(name => 
    name.toLowerCase().includes(search.toLowerCase())
  )

  // Categorize icons (roughly based on registry sections)
  const categories = [
    {
      title: "Navigation",
      icons: ["home", "dashboard", "menu", "logout", "chevron-right", "chevron-left", "chevron-down", "chevron-up"] as DaIconName[]
    },
    {
      title: "Actions",
      icons: ["search", "edit", "delete", "copy", "download", "upload", "refresh", "filter", "add", "remove", "cloud", "close", "eye", "eye-off"] as DaIconName[]
    },
    {
      title: "Status",
      icons: ["alert-circle", "check-circle", "circle-x", "alert-triangle", "info-circle", "loader"] as DaIconName[]
    },
    {
      title: "User & Identity",
      icons: ["profile", "settings", "notification", "withdrawal", "support"] as DaIconName[]
    },
    {
      title: "Finance & Data",
      icons: ["pipeline", "crypto", "real-estate", "trading-tools", "forex", "stock", "analytics", "transaction", "activity", "deals", "reports"] as DaIconName[]
    }
  ]

  return (
    <div className="p-8 pt-30  mx-auto space-y-12 pb-24 pt-24 bg-background min-h-screen">
      <div className="max-w-6xl mx-auto space-y-12">
      <header className="space-y-4">
        <DaTypography variant="displayLg">Icons</DaTypography>
        <DaTypography variant="headlineSm" color="secondary">
          A comprehensive library of icons used across the design system, powered by Lucide and other React Icon sets.
        </DaTypography>
      </header>

      {/* ── Search & Sizes ────────────────────────────────────── */}
      <section className="flex flex-col md:flex-row gap-8 items-start justify-between">
        <div className="w-full md:w-96">
          <DaInput
            placeholder="Search icons..."
            prefixIcon={<DaIcon name="search" />}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            clearable
            onClear={() => setSearch("")}
          />
        </div>
        
        <div className="flex flex-col gap-3">
          <DaTypography variant="labelSm" color="tertiary" className="uppercase tracking-wider">Named Sizes</DaTypography>
          <div className="flex items-center gap-6 p-4 bg-surface border border-border rounded-md">
            <div className="flex flex-col items-center gap-2">
              <DaIcon name="settings" size="xs" />
              <DaTypography variant="captionSm">xs</DaTypography>
            </div>
            <div className="flex flex-col items-center gap-2">
              <DaIcon name="settings" size="sm" />
              <DaTypography variant="captionSm">sm</DaTypography>
            </div>
            <div className="flex flex-col items-center gap-2">
              <DaIcon name="settings" size="md" />
              <DaTypography variant="captionSm">md</DaTypography>
            </div>
            <div className="flex flex-col items-center gap-2">
              <DaIcon name="settings" size="lg" />
              <DaTypography variant="captionSm">lg</DaTypography>
            </div>
            <div className="flex flex-col items-center gap-2">
              <DaIcon name="settings" size="xl" />
              <DaTypography variant="captionSm">xl</DaTypography>
            </div>
            <div className="flex flex-col items-center gap-2">
              <DaIcon name="settings" size="2xl" />
              <DaTypography variant="captionSm">2xl</DaTypography>
            </div>
          </div>
        </div>
      </section>

      {/* ── Icon Grid ────────────────────────────────────────── */}
      {search ? (
        <section className="space-y-6">
          <DaTypography variant="titleLg">Search Results ({filteredIcons.length})</DaTypography>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredIcons.map(name => (
              <IconCard key={name} name={name} />
            ))}
          </div>
        </section>
      ) : (
        <div className="space-y-16">
          {categories.map(category => (
            <section key={category.title} className="space-y-6">
              <DaTypography variant="titleLg">{category.title}</DaTypography>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.icons.map(name => (
                  <IconCard key={name} name={name} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
      </div>
    </div>
  )
}

function IconCard({ name }: { name: DaIconName }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(name)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={copyToClipboard}
      className="group relative flex flex-col items-center justify-center gap-4 p-6 bg-surface border border-border rounded-md hover:border-primary transition-all duration-200 aspect-square"
    >
      <div className="text-text-primary group-hover:scale-110 transition-transform duration-200">
        <DaIcon name={name} size="xl" />
      </div>
      <DaTypography variant="captionSm" color="secondary" className="text-center break-all line-clamp-1">
        {name}
      </DaTypography>
      
      {copied && (
        <div className="absolute inset-0 flex items-center justify-center bg-surface/90 rounded-md">
          <DaTypography variant="labelSm" color="primary">Copied!</DaTypography>
        </div>
      )}
    </button>
  )
}
