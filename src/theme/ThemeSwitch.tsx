import { useEffect, useState } from "react"
import { LuMoon, LuSun } from "react-icons/lu"
import { toggleTheme } from "./theme"

type ThemeSwitchProps = {
  className?: string 
}

export function ThemeSwitch({ className = "" }: ThemeSwitchProps) {
  const [isDark, setIsDark] = useState(false)

  // Sync state with DOM on mount and when changed
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"))
    }
    
    checkTheme()
    
    // Watch for class changes on <html>
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ["class"] 
    })
    
    return () => observer.disconnect()
  }, [])

  const handleToggle = () => {
    toggleTheme()
    // The observer will update the state
  }

  return (
    <button
      onClick={handleToggle}
      aria-label="Toggle theme"
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-text-secondary border border-border bg-surface hover:bg-muted transition-all duration-200 ${className}`.trim()}
    >
      {isDark ? (
        <LuSun className="w-5 h-5" />
      ) : (
        <LuMoon className="w-5 h-5" />
      )}
    </button>
  )
}
