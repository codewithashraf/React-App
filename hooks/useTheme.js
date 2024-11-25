import { useContext } from "react"
import { ThemeContext } from "../context/themeContext"

export function useTheme(){
  const [isDark, setIsDark] = useContext(ThemeContext)

  return [isDark, setIsDark]
}