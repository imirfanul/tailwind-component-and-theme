
import React, { createContext, useContext, useEffect, useState } from 'react'
import { CustomThemeContext, type ThemeMode, type CustomThemeContextType } from '@/hooks/useCustomTheme'

interface CustomThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: ThemeMode
  storageKey?: string
}

export const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({
  children,
  defaultTheme = 'light',
  storageKey = 'custom-theme',
}) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem(storageKey) as ThemeMode) || defaultTheme
    }
    return defaultTheme
  })

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(mode)
  }, [mode])

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light'
    setMode(newMode)
    localStorage.setItem(storageKey, newMode)
  }

  const contextValue: CustomThemeContextType = {
    mode,
    toggleTheme,
    colors: {
      primary: 'hsl(var(--primary))',
      secondary: 'hsl(var(--secondary))',
      warning: 'hsl(var(--warning))',
      success: 'hsl(var(--success))',
      error: 'hsl(var(--error))',
      info: 'hsl(var(--info))',
      accent: 'hsl(var(--accent))',
    },
    breakpoints: {
      xs: '0px',
      sm: '600px',
      md: '1024px',
      lg: '1367px',
      xl: '1556px',
    }
  }

  return (
    <CustomThemeContext.Provider value={contextValue}>
      {children}
    </CustomThemeContext.Provider>
  )
}
