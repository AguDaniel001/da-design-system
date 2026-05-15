import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ThemeSwitch } from "../../../theme/ThemeSwitch";
import DaTypography from "../typography/DaTypography";
import { DaIcon } from "../icon/DaIcon";
import { DaMobileSidebar } from "./DaMobileSidebar";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/buttons", label: "Buttons" },
  { to: "/typography", label: "Typography" },
  { to: "/icons", label: "Icons" },
  { to: "/input-fields", label: "Inputs" },
] as const;

export function DaNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-2 p-2 bg-surface/80 backdrop-blur-md border border-border rounded-full shadow-lg">
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 px-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeProps={{ className: "bg-primary text-primary-foreground shadow-sm" }}
                inactiveProps={{ className: "text-text-secondary hover:bg-muted" }}
                className="px-4 py-2 rounded-full transition-all duration-200"
              >
                <DaTypography variant="labelSm" color="inherit">
                  {link.label}
                </DaTypography>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden px-2">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 rounded-full hover:bg-muted transition-colors text-text-secondary"
              aria-label="Open menu"
            >
              <DaIcon name="menu" size={24} />
            </button>
          </div>

          <div className="w-px h-6 bg-border mx-1" />
          
          <div className="pr-1 hidden md:block">
            <ThemeSwitch />
          </div>

          {/* Mobile Brand/Logo or simple indicator when collapsed */}
          <div className="md:hidden pr-3 pl-1">
            <DaTypography variant="labelSm" color="primary" className="font-bold">DA</DaTypography>
          </div>
        </div>
      </nav>

      <DaMobileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        links={NAV_LINKS}
      />
    </>
  );
}
