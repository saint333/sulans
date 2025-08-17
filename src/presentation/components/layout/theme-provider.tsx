"use client"

import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from "next-themes"
import { ReactNode } from "react"

interface ThemeProviderProps {
  children: ReactNode
  attribute?: "class" | "data-theme"
  defaultTheme?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

export function ThemeProvider({ 
  children, 
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
  disableTransitionOnChange = true,
  ...props 
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}

export const useTheme = () => {
  const { theme, setTheme } = useNextTheme();
  return { theme, setTheme };
};
