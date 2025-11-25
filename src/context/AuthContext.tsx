import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type AuthContextType = {
  isAuthenticated: boolean
  login: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      return window.localStorage.getItem('auth') === 'true'
    } catch {
      return false
    }
  })
  const login = () => setIsAuthenticated(true)
  useEffect(() => {
    try {
      window.localStorage.setItem('auth', String(isAuthenticated))
    } catch {
      // ignore
    }
  }, [isAuthenticated])
  return (
    <AuthContext.Provider value={{ isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
