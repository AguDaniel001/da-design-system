type Theme = "light" | "dark"

const THEME_KEY = "theme"

export function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

export function getStoredTheme(): Theme | null {
  return localStorage.getItem(THEME_KEY) as Theme | null
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.classList.toggle("dark", theme === "dark")
}

export function initTheme() {
  const stored = getStoredTheme()

  // OLD BEHAVIOR (system + stored preference)
  // const theme = stored ?? getSystemTheme()

  // NEW BEHAVIOR: always start in dark mode
  const theme = stored ?? "dark"
  applyTheme(theme)
}


export function setTheme(theme: Theme) {
  localStorage.setItem(THEME_KEY, theme)
  applyTheme(theme)
}

export function toggleTheme() {
  const isDark = document.documentElement.classList.contains("dark")
  setTheme(isDark ? "light" : "dark")
}
