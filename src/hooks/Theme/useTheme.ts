import { ThemeContext, type ThemeContextType } from "@/contexts/Theme/ThemeContext"
import { useContext } from "react"

export const useThemes = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useThemes must be used within an ThemeProvider")
  }
  return context
}
