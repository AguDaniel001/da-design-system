import { Link } from "@tanstack/react-router"
import { DaIcon } from "../icon/DaIcon"
import DaTypography from "../typography/DaTypography"
import { ThemeSwitch } from "../../../theme/ThemeSwitch"
import { cn } from "../../../utils/cn"

type DaMobileSidebarProps = {
  isOpen: boolean
  onClose: () => void
  links: readonly { readonly to: string; readonly label: string }[]
}

export function DaMobileSidebar({ isOpen, onClose, links }: DaMobileSidebarProps) {
  return (
    <>
      {/* Scrim / Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-overlay backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <aside
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-72 bg-surface border-l border-border shadow-2xl transition-transform duration-300 ease-in-out transform",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-8">
            <DaTypography variant="titleLg">Menu</DaTypography>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Close menu"
            >
              <DaIcon name="close" size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-2 flex-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={onClose}
                activeProps={{ className: "bg-primary text-primary-foreground shadow-sm" }}
                inactiveProps={{ className: "text-text-secondary hover:bg-muted" }}
                className="px-4 py-3 rounded-md transition-all duration-200"
              >
                <DaTypography variant="labelMd" color="inherit">
                  {link.label}
                </DaTypography>
              </Link>
            ))}
          </nav>

          <div className="pt-6 border-t border-border flex items-center justify-between">
            <DaTypography variant="labelSm" color="secondary">Theme</DaTypography>
            <ThemeSwitch />
          </div>
        </div>
      </aside>
    </>
  )
}
