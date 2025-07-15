
import { useContext, createContext } from 'react'

export type ThemeMode = 'light' | 'dark'

export interface CustomThemeContextType {
  mode: ThemeMode
  toggleTheme: () => void
  colors: {
    primary: string
    secondary: string
    warning: string
    success: string
    error: string
    info: string
    accent: string
  }
  breakpoints: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
  }
}

export const CustomThemeContext = createContext<CustomThemeContextType | undefined>(undefined)

export const useCustomTheme = (): CustomThemeContextType => {
  const context = useContext(CustomThemeContext)
  if (!context) {
    throw new Error('useCustomTheme must be used within a CustomThemeProvider')
  }
  return context
}

// Helper hook for theme colors
export const useThemeColors = () => {
  const theme = useCustomTheme()
  return theme.colors
}

// Helper hook for breakpoints
export const useBreakpoints = () => {
  const theme = useCustomTheme()
  return theme.breakpoints
}
