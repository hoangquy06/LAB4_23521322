import { createContext, useContext, useState } from 'react'

type Theme = 'light' | 'dark'

export const ThemeContext = createContext<Theme>('light')

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  return (
    <ThemeContext.Provider value={theme}>
      <div className={theme === 'light' ? 'theme-light' : 'theme-dark'}>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Đổi chủ đề</button>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
