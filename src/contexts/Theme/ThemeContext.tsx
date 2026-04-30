import { createContext } from "react"

export interface ThemeContextType {
  theme: "dark" | "light" | "system"
  handleChangeTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
)
