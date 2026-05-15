import { LuMoon, LuSun } from "react-icons/lu"
import { toggleTheme } from "./theme"

type ThemeSwitchProps = {
  className?: String
}

export function ThemeSwitch({className}:ThemeSwitchProps) {
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`
        inline-flex h-10 w-10 items-center justify-center
        rounded-full text-grey-600 border border-grey-400
        bg-bg 
        hover:bg-secondary
        hover:border-secondary
        dark:border-primary/24
        transition ${className}
      `}
    >
      <span className="dark:hidden">
        <LuMoon  />
      </span>
      <span className="hidden dark:inline"><LuSun  /></span>
    </button>
  )
}