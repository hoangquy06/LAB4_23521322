import { useState } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : initialValue
    } catch {
      return initialValue
    }
  })

  const setValue = (newValue: T) => {
    setStoredValue(newValue)
    try {
      window.localStorage.setItem(key, JSON.stringify(newValue))
    } catch {
      // ignore
    }
  }

  return [storedValue, setValue] as const
}